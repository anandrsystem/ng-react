import React from 'react';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from "history";

import ListComponent from './components/ListComponent';
import HomeComponent from './components/OtherComponent';

const browserHistory = createBrowserHistory();

const App = (props) => {
  return <div>
    This is React App.
    <br /><br />
    <Router history={browserHistory}>
      <Route exact path="/" component={HomeComponent}></Route>
      <Route exact path="/list">
        <ListComponent {...props} history={browserHistory}></ListComponent>
      </Route>
    </Router>
  </div>
}

export default App;