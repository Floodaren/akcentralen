import React, { Component } from 'react';
import './LoginComponent.css';
import Form from 'react-bootstrap/lib/Form';
import FormGroup  from 'react-bootstrap/lib/FormGroup'; 
import FormControl  from 'react-bootstrap/lib/FormControl';
import Col  from 'react-bootstrap/lib/Col';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import cookie from 'react-cookie';
import axios from 'axios';
import 'whatwg-fetch';

var userName;
var passWord;

class App extends Component {
constructor(props)
{
    super(props);
    this.state = {stateId: '', stateUsername: ''};
    this.handleLogInName = this.handleLogInName.bind(this);
    this.handleLogInPassword = this.handleLogInPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
handleLogInName(event)
{
    userName = event.target.value;
}

handleLogInPassword(event)
{
  passWord = event.target.value;
}


handleSubmit(e) {
  axios.post('http://localhost:3030/logInUser', {
    username: userName,
    password: passWord
  })
  .then(function (response) {
    if (response.data.userId === 0)
    {
      alert("Felaktig login, försök igen");
    }
    else
    {
      this.setState({stateId: response.data.userId, stateUsername: response.data.userName});
    }
  }.bind(this))
  .catch(function (error) {
    console.log(error);
  });
}


  render() {
    return (
      <div>
        <h1>Logga in</h1>
        <div id="logInFields">
          <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col sm={20}>
                <FormControl onChange={this.handleLogInName} type="email" placeholder="Email"/>
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col sm={20}>
                <FormControl onChange={this.handleLogInPassword} type="password" placeholder="Lösenord" />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={0.5} sm={20}>
                <Checkbox>Kom ihåg mig</Checkbox>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={0.5} sm={20}>
                <button className="btn btn-primary" type="button" onClick={this.handleSubmit} > 
                  Logga in
                </button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}

export default App;