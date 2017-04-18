import shopItems from '../models/shop_items.js'

export default function AppReducer (state, action) {
  if (state === undefined) {
    return {};
  }

  switch (action.type){
    case ("ADD_TO_CART"):
      let cartArray = [];
      let itemCount = {};
      let tc = 0;
      cartArray.push(action.itemObj)
      if (state.cartItems){
        state.cartItems.forEach((i) => {
          cartArray.push(i)
        })
      }
      shopItems.forEach((i) => {
        itemCount[i.id] = 0
      })
      cartArray.forEach((i) => {
        shopItems.forEach((j) => {
          if (i == j){
            itemCount[i.id] ++;
          }
        })
      })
      for (var key in itemCount){
        shopItems.forEach((j)=>{
          if (key == j.id){
            tc += Number(j.price)*Number(itemCount[key])
          }
        })
      }
      console.log("total cost: ",tc)
      let newState = Object.assign({},state,{totalCost:tc,cartItems:cartArray,count:itemCount})
      return newState
    default:
      return state
  }

}
