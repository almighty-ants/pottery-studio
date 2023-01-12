import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from '../client/components/Home';
import AboutUs from '../client/components/AboutUs';
import Navbar from '../client/components/Navbar';
import AllProducts from '../client/components/AllProducts';
import SingleProduct from '../client/components/SingleProduct';
import Login from '../client/components/Login';
import Cart from '../client/components/Cart';
import CreateAccount from './components/CreateAccount';
import Checkout from './components/checkout/Checkout';
import Confirmation from './components/checkout/Confirmation';

import { autoLogin } from './store/auth';

// Admin
import AdminHome from './components/admin/AdminHome';
import AdminLogin from './components/admin/AdminLogin';
import AllUsers from './components/admin/AllUsers';
import CreateProduct from './components/admin/CreateProduct';
import EditProduct from './components/admin/EditProduct';

class App extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      this.props.autoLogin(token);
    }
  }

  render() {
    console.log('THIS.PROPS', this.props);
    return (
      <Router>
        <div>
          <Navbar />
          <main>
            {this.props.auth.isAdmin === true ? (
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/shop" component={AllProducts} />
                <Route
                  exact
                  path="/products/create"
                  component={CreateProduct}
                />
                <Route
                  exact
                  path="/products/:id/edit"
                  component={EditProduct}
                />
                <Route exact path="/products/:id" component={SingleProduct} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/aboutus" component={AboutUs} />
                <Route exact path="/signup" component={CreateAccount} />
                <Route exact path="/admin" component={AdminHome} />
                <Route exact path="/admin/login" component={AdminLogin} />
                <Route exact path="/admin/users" component={AllUsers} />
              </Switch>
            ) : (
              <Switch>
                <Route exact path="/admin/login" component={AdminLogin} />
                <Route exact path="/" component={Home} />
                <Route exact path="/shop" component={AllProducts} />
                <Route exact path="/products/:id" component={SingleProduct} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/aboutus" component={AboutUs} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={CreateAccount} />
                <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/confirmation" component={Confirmation} />
              </Switch>
            )}
          </main>
        </div>
      </Router>
    );
  }
}

const mapState = (state) => {
  return {
    auth: state.auth,
  };
};
const mapDispatch = (dispatch) => {
  return {
    autoLogin: (token) => dispatch(autoLogin(token)),
  };
};

export default connect(mapState, mapDispatch)(App);
