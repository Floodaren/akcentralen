import React, { Component } from 'react';
import JobGroup from '../JobGroupComponent/JobGroupComponent';
import axios from 'axios';

class GetJobs extends Component {

constructor(props)
{
    super(props);
    this.state = {jobs: []};
}


componentDidMount()
{
  axios.get('http://localhost:3030/getJobList',{
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


  render() {
    return (
      <div>     
        <JobGroup dataset={this.state.jobs}/>
      </div>
    );
  }
}

export default GetJobs;