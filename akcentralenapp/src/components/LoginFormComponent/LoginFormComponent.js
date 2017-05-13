import React, { Component } from 'react';
import Col  from 'react-bootstrap/lib/Col';
import Form from 'react-bootstrap/lib/Form';
import FormGroup  from 'react-bootstrap/lib/FormGroup'; 
import FormControl  from 'react-bootstrap/lib/FormControl';
import Cookies from 'universal-cookie';
import axios from 'axios';
const cookies = new Cookies();
var userName;
var passWord;

class App extends Component {

constructor(props)
{
  super(props);
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

handleSubmit() {
  var self = this;
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
      cookies.set('userId', response.data.userId, { path: '/' });
      cookies.set('email', response.data.email, { path: '/' });
      cookies.set('typeOfUser', response.data.typeOfUser, { path: '/' });
      console.log(cookies.get('userId'));
      console.log(cookies.get('email'));
      console.log(cookies.get('typeOfUser'));
      self.props.method();
    }
  })
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
