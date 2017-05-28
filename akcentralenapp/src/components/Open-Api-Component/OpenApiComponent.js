import React, { Component } from 'react';
import axios from 'axios';

class OpenApi extends Component {

  constructor(props) {
    super(props);
    this.state = {stad: "", weatherDescription: "", temperature: 0}
  }

  componentDidMount() {
    var self = this;
    axios.get('http://api.openweathermap.org/data/2.5/weather?id=2711533&APPID=ab2d497593641f0073fd945157b918cb', {
    })
      .then(function (response) {
        self.setState({ stad: response.data.name, weatherDescription: response.data.weather[0].description, temperature: (Math.round(response.data.main.temp-273.15))});
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        Stad: {this.state.stad}<br/>
        Väderinformation: {this.state.weatherDescription}<br/>
        Temperatur: {this.state.temperature}
      </div>
    );
  }
}

export default OpenApi;