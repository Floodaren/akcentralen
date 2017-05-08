import React, { Component } from 'react';
import './bootstraptheme.css';
import './App.css';
import LoginComponent from './components/LoginComponent/LoginComponent';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import ContactComponent from './components/ContactComponent/ContactComponent';
import AboutComponent from './components/AboutComponent/AboutComponent';
//cd Documents/"Högskolan Väst"/"TSB100 - Tillämpad Systemintegration"/akcentralen/akcentralenapp
    
class App extends Component {
  render() {
    return (
      <div className="App">     
        <NavbarComponent/>
        <LoginComponent/>
        <AboutComponent/>
        <ContactComponent/>
      </div>
    );
  }
}

export default App;
