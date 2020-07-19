import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Apod from './components/Apod';
import Neows from './components/Neows';
const App = () => {
  return (
    <div>
      <div className="container">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
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

export default App;