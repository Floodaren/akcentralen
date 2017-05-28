import React, { Component } from 'react';
import './ContactComponent.css';
    
class App extends Component {
  render() {
    return (
      <div className="container-fluid text-center test">
        <h2>Kontakta oss?</h2>
        <p>AK-Centralen AB<br/>
          Datavägen 14B<br/>
          436 32 Askim, Göteborg<br/>
          Telefon: <a href="tel:0313108800" className="contactInfo">+46 (0) 31 3108 800</a><br/>
          E-mail: <a href="mailto:akc@ak-centralen.se" className="contactInfo">akc@ak-centralen.se</a></p>
      </div>
    );
  }
}

export default App;