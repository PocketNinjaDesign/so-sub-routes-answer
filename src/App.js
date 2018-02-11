import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import Login from './components/Login';
import Viewport from './components/Viewport';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path='/dashboard' component={Viewport} />
      </div>
    )
  }
}

export default App;