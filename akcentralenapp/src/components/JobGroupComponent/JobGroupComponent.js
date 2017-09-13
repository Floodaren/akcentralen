import React, { Component } from 'react';
import './JobGroupComponent.css';
import JobGroupItem from '../JobGroupItem/JobGroupItem';


class JobGroup extends Component {

  render() {
    const listItems = this.props.dataset.map(function(job,i) { 
    return <JobGroupItem key={i} jobDetails={job} updatelist={this.props.updatelist}/>},this);
    return (
      <div>
        <ul id="jobHolder">
            {listItems}
        </ul>
      </div>
    );
  }
}

export default JobGroup;