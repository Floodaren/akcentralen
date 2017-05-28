import React, { Component } from 'react';
import JobGroup from '../JobGroupComponent/JobGroupComponent';
import NewJobModal from '../Modal/Modal.js';
import axios from 'axios';
import Cookies from 'universal-cookie';
import './GetJobsComponent.css';
const cookies = new Cookies();
class GetJobs extends Component {

  constructor(props) {
    super(props);
    this.state = { jobs: [] };
    this.updatelist = this.updatelist.bind(this);
  }

  updatelist() {
    if (cookies.get('typeOfUser') === 'Admin') {
      axios.get('http://localhost:3030/getAllJobs', {
      })
        .then(result => {
          const initalState = this.state;
          const newState = [...initalState, ...result.data.jobb];
          this.setState({ jobs: newState });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    else {
      axios.post('http://localhost:3030/getJobList', {
        userId: cookies.get('userId')
      })
        .then(result => {
          const initalState = this.state;
          const newState = [...initalState, ...result.data.jobb];
          this.setState({ jobs: newState });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  }

  componentWillMount() {
    this.updatelist();
    if (cookies.get('typeOfUser') === "Admin")
    {
      setInterval(()=>this.updatelist(),30000);
    }
  }
  
  render() {
    return (
      <div>
        <div id="updateAndNewJob">
          <div className="col-sm-4"><NewJobModal updatelist={this.updatelist.bind(this)}/></div>
          <div className="col-sm-4"><button className="btn btn-primary" id="updateJobButton" onClick={this.updatelist}>Uppdatera lista</button></div>
          <div className="col-sm-4"><button className="btn btn-primary" id="callAKButton"><a href="tel:0313108800" id="phoneNumber">Ring AK-Centralen</a></button></div>
          <hr />
        </div>
        <div className="JobGruppItem"><JobGroup dataset={this.state.jobs} updatelist={this.updatelist.bind(this)} /></div>
      </div>
    );
  }
}

export default GetJobs;