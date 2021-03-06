import React from 'react';
import { connect } from 'react-redux';

import PurchaseForm from './PurchaseForm';
import CheckoutCart from './CheckoutCart';

import { fetchProducts } from '../../store/products';

class Checkout extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <div className="container">
        <h1 id="checkout-title">Checkout</h1>
        <div className="checkout-container">
          <PurchaseForm
            cart={this.props.cart.products}
            history={this.props.history}
          />
          <CheckoutCart
            cart={this.props.cart.products}
            products={this.props.products}
          />
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  cart: state.cart,
  products: state.products,
});

const mapDispatch = (dispatch) => ({
  getProducts: () => dispatch(fetchProducts()),
});

export default connect(mapState, mapDispatch)(Checkout);
