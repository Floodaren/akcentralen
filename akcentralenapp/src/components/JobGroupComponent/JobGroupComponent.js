import React, { Component } from 'react';
import JobGroupItem from '../JobGroupItem/JobGroupItem';

class JobGroup extends Component {
    

  render() {
    const listItems = this.props.dataset.map((job, i) => <JobGroupItem key={i} jobDetails={job}/>);
    
    return (
      <div>     
        <ul>
            {listItems}
        </ul>
      </div>
    );
  }
}

export default JobGroup;