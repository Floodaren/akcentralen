import React, { Component } from 'react';
import './GetJobsComponent.css';
import JobGroup from '../JobGroupComponent/JobGroupComponent';
import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class GetJobs extends Component {

constructor(props)
{
    super(props);
    this.state = {jobs: []};
}



componentWillMount()
{
  if(cookies.get('typeOfUser') === 'Admin')
  {
    axios.get('http://localhost:3030/getAllJobs',{
    })
    .then(result => {
      const initalState = this.state;
      const newState = [ ...initalState, ...result.data.jobb];
      this.setState({jobs: newState});
    })
    .catch(function(error){
      console.log(error);
    })   
  }
  else 
  {
    axios.post('http://localhost:3030/getJobList',{
      userId: cookies.get('userId')
    })
    .then(result => {
      const initalState = this.state;
      const newState = [ ...initalState, ...result.data.jobb];
      this.setState({jobs: newState});
    })
    .catch(function(error){
      console.log(error);
    })  
  }
}


  render() {
    return (
      <div>
        <div id="updateAndNewJob">
          <button className="btn btn-primary" id="newJobButton">Nytt jobb</button>
          <button className="btn btn-primary" id="updateJobButton">Uppdatera lista</button>
          <hr/>
        </div>     
        <div className="JobGruppItem"><JobGroup dataset={this.state.jobs}/></div>
      </div>
    );
  }
}

export default GetJobs;