import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import shopItems from '../models/shop_items.js'
import Cart from './cart.js'
import CartBtn from './cart_btn.js'

class Shop extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <ul className="shop-items list-group">{
          shopItems.map((i) => {
          return <li className="single-shop-item list-group-item">
                    <p>{i.name}  ${i.price}</p>
                    <CartBtn itemObj={i}/>
                  </li>
          })}
      </ul>
    );
  }
}

export default connect(container.allState)(Shop)
