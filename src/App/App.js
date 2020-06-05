/* eslint-disable no-shadow */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import HomePage from '../components/pages/Homepage/Homepage';
import ShopPage from '../components/pages/Shoppage/Shoppage';
import SignInAndSignUpPage from '../components/pages/Authpage/Authpage';
import CheckoutPage from '../components/pages/Checkout/Checkout';
import Header from '../components/shared/Header/Header';
import { auth, createUserProfileDocument } from '../helpers/data/firebase.utils';
import setCurrentUser from '../redux/user/user.action';
import selectCurrentUser from '../redux/user/user.selector';


import './App.scss';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() => (this.props.currentUser ? (
                <Redirect to='/' />
            ) : (
                <SignInAndSignUpPage />
            ))
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
