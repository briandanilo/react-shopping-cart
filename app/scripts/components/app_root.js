import React from 'react'
import { connect } from 'react-redux'
import { Route, Link, NavLink } from 'react-router-dom'
import container from '../containers/all.js'
import shopItems from '../models/shop_items.js'
import Shop from './shop.js'
import Cart from './cart.js'

class AppRoot extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <main>
        <Shop />
        <Cart />
      </main>
    );
  }
}

export default connect(container.allState)(AppRoot)
