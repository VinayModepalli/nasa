import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Apod from './components/Apod';
import Neows from './components/Neows';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

class App extends Component {
  render () {
    return (
      <div>
        <div className="container">
          <BrowserRouter history={history}>
            
          <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path = "/apod" component={Apod} />
              <Route path = "/neows" component={Neows} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    )
  }
}

export default App;