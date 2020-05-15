import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../components/pages/Homepage/Homepage';

import './App.scss';

const Hatspage = () => (
    <div>
      <h1>Hats page</h1>
    </div>
);

class App extends React.Component {
  render() {
    return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={Hatspage} />
      </Switch>
    </div>
    );
  }
}

export default App;
