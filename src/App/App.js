import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../components/pages/Homepage/Homepage';
import Shoppage from '../components/pages/Shoppage/Shoppage';
import Header from '../components/shared/Header/Header';
import Auth from '../components/pages/Authpage/Authpage';
import { auth, createUserProfileDocument } from '../helpers/data/firebase.utils';

import './App.scss';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // console.log(userRef);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shoppage} />
          <Route path='/signin' component={Auth} />
        </Switch>
      </div>
    );
  }
}

export default App;
