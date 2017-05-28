import React, { Component } from 'react';
import './bootstraptheme.css';
import './App.css';
import LoginComponent from './components/LoginComponent/LoginComponent';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import ContactComponent from './components/ContactComponent/ContactComponent';
import AboutComponent from './components/AboutComponent/AboutComponent';
import GetJobsComponent from './components/GetJobsComponent/GetJobsComponent';
import SoaComponent from './components/SOA-Component/SoaComponent.js';
import OpenApi from './components/Open-Api-Component/OpenApiComponent.js';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class App extends Component {

  constructor()
  {
    super();
    if(cookies.get('userId') == null)
    {
      this.state = {loggedIn: false};
    }
    else if (cookies.get('userId') != null) 
    {
      this.state = {loggedIn: true};
    }
    
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
    let showSOAComponent = "";
    if (this.state.loggedIn === false)
    {
      showLoginForm = <LoginComponent loggedIn={this.state.loggedIn} changeLoginStatus={this.changeLoginStatus.bind(this)}/> 
      showAboutInfo = <AboutComponent/>
      showSOAComponent = <SoaComponent/>
      showContactInfo = <ContactComponent/>
    }
    else if (this.state.loggedIn === true)
    {
      showjobs= <GetJobsComponent/>
      showSOAComponent = <SoaComponent/>
    }
    return (
      <div className="App">     
        <NavbarComponent loggedIn={this.state.loggedIn} changeLoginStatus={this.changeLoginStatus.bind(this)}/>
        {showLoginForm}
        {showjobs}
        {showAboutInfo}
        {showContactInfo}
        {/* Komponenten för att hämta info från SOA-projektet{showSOAComponent}*/}
        {/* Komponenten för att hämta väderinforamtion fårn ett API på nätet<OpenApi/>*/}
      </div>
    );
  }
}

export default App;
