import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import shopItems from '../models/shop_items.js'

class CartBtn extends React.Component {

  constructor (props) {
    super(props);
    this.addItemToCart = this.addItemToCart.bind(this)
  }

  addItemToCart (e) {
    this.props.dispatch({type:"ADD_TO_CART",itemObj:this.props.itemObj})
  }

  render () {
    return (
      <button onClick={this.addItemToCart} type="button" className="btn btn-default add-to-cart">
        <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
      </button>
    );
  }
}

export default connect(container.allState)(CartBtn)
