import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../components/pages/Homepage/Homepage';
import Shoppage from '../components/pages/Shoppage/Shoppage';
import Header from '../components/shared/Header/Header';
import Auth from '../components/pages/Authpage/Authpage';
import { auth } from '../helpers/data/firebase.utils';

import './App.scss';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubsribeFromAuth = null

  componentDidMount() {
    this.unsubsribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubsribeFromAuth();
  }


  render() {
    return (
    <div>
      <Header currentUser={this.state.currentUser}/>
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
