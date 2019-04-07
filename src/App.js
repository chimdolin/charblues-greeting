import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Song from './containers/Song';
import Schedule from './containers/Schedule';
import Store from './containers/Store';
import ContactUs from './containers/ContactUs';
import NotFound from './containers/error/NotFound';

class App extends Component {

  renderRouter() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/song' component={Song} />
        <Route exact path='/schedule' component={Schedule} />
        <Route exact path='/store' component={Store} />
        <Route exact path='/contactus' component={ContactUs} />

        <Route component={NotFound} />
      </Switch>
    );
  }

  render() {
    return (
      <BrowserRouter> { this.renderRouter() } </BrowserRouter>
    );
  }
}

export default App;
