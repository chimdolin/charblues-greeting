import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Song from './containers/Song';
import Schedule from './containers/Schedule';
import Store from './containers/Store';
import ContactUs from './containers/ContactUs';
import NotFound from './containers/error/NotFound';

import firebase from 'firebase'

class App extends Component {

  constructor(props){
    super(props)
    const config = {
      apiKey: "AIzaSyAqHq6Te5semF3HTqDZtc5fNv6sRPr5FD0",
      authDomain: "charblues-greeting.firebaseapp.com",
      databaseURL: "https://charblues-greeting.firebaseio.com",
      projectId: "charblues-greeting",
      storageBucket: "charblues-greeting.appspot.com",
      messagingSenderId: "731983892035"
    };
    firebase.initializeApp(config)
  }

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
