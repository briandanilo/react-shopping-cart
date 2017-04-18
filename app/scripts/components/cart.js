import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import shopItems from '../models/shop_items.js'

class Cart extends React.Component {

  constructor (props) {
    super(props);
  }

  renderCartItems () {
    if (this.props.cartItems){
      //create array of only unique items purchased
      let uniqueBuys = []
      this.props.cartItems.forEach((i)=>{
        let alreadyInThere = false;
        uniqueBuys.forEach((j)=>{
          if (i==j) alreadyInThere = true
        })
        if (!alreadyInThere)
          uniqueBuys.push(i)
      })
      return uniqueBuys.map((i)=>{
        let count = this.props.count[i.id]
        if (count)
          return <li>{i.name} ({count} x ${i.price})</li>
      })
    }
  }

  renderTotal () {
    if (this.props.totalCost)
      return <li>Total Cost: ${this.props.totalCost}</li>
  }

  render () {
    return (
      <div className="shopping-cart">
        <ul className="cart-items list-group">Shopping Cart
        {this.renderCartItems()}
        {this.renderTotal()}
        </ul>
      </div>
    );
  }
}

export default connect(container.allState)(Cart)
