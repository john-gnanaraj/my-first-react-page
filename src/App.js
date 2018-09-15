import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter,
  Route,
  Link, Switch, Redirect
} from 'react-router-dom';

import HeaderComponent from './components/headerComponent/headerComponent';
import FooterComponent from './components/footerComponent/footerComponent';
import HomePage from './components/pages/homePage';
import ProductPage from './components/pages/products';
import ContactPage from './components/pages/contacts';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        
        <HeaderComponent />

        <Route exact path='/' component={HomePage} />
        <Route path='/Home' component={HomePage} />
        <Route path='/Products' component={ProductPage} />
        <Route path='/Contacts' component={ContactPage} />

        <FooterComponent />
        
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
