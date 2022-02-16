import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './components/Greeting';
import configureStore from './redux/configureStore';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>Welcome !!</h1>
        </Route>
        <Route exact path="/hello">
          <Greeting />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

export default App;
