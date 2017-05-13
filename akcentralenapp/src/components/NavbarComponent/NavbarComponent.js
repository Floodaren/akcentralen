import React, { Component } from 'react';
import './NavbarComponent.css';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
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
              <NavItem eventKey={1} href="#">Link</NavItem>
              <NavItem eventKey={2} href="#">Link</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Link Right</NavItem>
              <NavItem eventKey={2} href="#">Link Right</NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3} href="http://www.ak-centralen.dk/sv/" target="_blank">Ak-centralen</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.4}><div onClick={this.removeCookie}>Logga ut</div></MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default App;