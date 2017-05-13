import React, { Component } from 'react';
import './LoginComponent.css';
import LoginFormComponent from '../LoginFormComponent/LoginFormComponent.js';


class App extends Component {

constructor(props)
{
super(props);
this.onChangeLoggedIn = this.onChangeLoggedIn.bind(this);
}

onChangeLoggedIn()
{
      this.props.changeLoginStatus(true);
}

  render() {
    let showLoginForm = "";
    if (this.props.loggedIn === false)
    {
      showLoginForm = <LoginFormComponent method={this.onChangeLoggedIn}/>
    }
    return (
      <div>
        {showLoginForm}
      </div>
    );
  }
}

export default App;