import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from "redux";
import srcApp from "./reducers";

import Notes from "./components/Notes";
import NotFound from "./components/NotFound";


let store = createStore(srcApp);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Notes} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
