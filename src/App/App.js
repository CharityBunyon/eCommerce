import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../components/pages/Homepage/Homepage';
import Shoppage from '../components/pages/Shoppage/Shoppage';
import Header from '../components/shared/Header/Header';

import './App.scss';


class App extends React.Component {
  render() {
    return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shoppage} />
      </Switch>
    </div>
    );
  }
}

export default App;
