import React, { Component } from 'react';
import './bootstraptheme.css';
import './App.css';
import LoginComponent from './components/LoginComponent/LoginComponent';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import ContactComponent from './components/ContactComponent/ContactComponent';
import AboutComponent from './components/AboutComponent/AboutComponent';
import GetJobsComponent from './components/GetJobsComponent/GetJobsComponent';
//cd Documents/"Högskolan Väst"/"TSB100 - Tillämpad Systemintegration"/akcentralen/akcentralenapp


class App extends Component {

  constructor()
  {
    super();
    this.state = {loggedIn: false};
  }

  changeLoginStatus(newValue)
  {
    this.setState({loggedIn: newValue});
  }

  render() {
    let showLoginForm = "";
    let showAboutInfo = "";
    let showContactInfo = "";
    let showjobs = "";
    if (this.state.loggedIn === false)
    {
      showLoginForm = <LoginComponent loggedIn={this.state.loggedIn} changeLoginStatus={this.changeLoginStatus.bind(this)}/> 
      showAboutInfo = <AboutComponent/>
      showContactInfo = <ContactComponent/>
    }
    else if (this.state.loggedIn === true)
    {
      showjobs= <GetJobsComponent/>
    }
    return (
      <div className="App">     
        <NavbarComponent loggedIn={this.state.loggedIn} changeLoginStatus={this.changeLoginStatus.bind(this)}/>
        {showLoginForm}
        {showjobs}
        {showAboutInfo}
        {showContactInfo}
      </div>
    );
  }
}

export default App;
