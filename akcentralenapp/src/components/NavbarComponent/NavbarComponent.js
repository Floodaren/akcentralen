import React, { Component } from 'react';
import './NavbarComponent.css';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class App extends Component {

constructor()
{
  super();
  this.removeCookie = this.removeCookie.bind(this);
}

removeCookie(event)
{ 
  cookies.remove('userId');
  cookies.remove('email');
  cookies.remove('typeOfUser');
  this.props.changeLoginStatus(false);
}

  render() {
    let showLogOutButton = ""
    if (this.props.loggedIn === true)
    {
      showLogOutButton = <MenuItem eventKey={2}><div onClick={this.removeCookie}>Logga ut</div></MenuItem> 
    }

    return (
      <div>
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Ak-Centralen</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
            </Nav>
            <Nav pullRight>
              <MenuItem eventKey={1} href="http://www.ak-centralen.dk/sv/" target="_blank">Ak-centralens hemsida</MenuItem>
              {showLogOutButton}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default App;