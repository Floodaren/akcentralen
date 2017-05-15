import React, { Component } from 'react';

class JobGroupItem extends Component {

  render() {
    return (
      <li>
        <p>
          {this.props.jobDetails.id}
          {this.props.jobDetails.butiksNamn}
        </p>
      </li>
    );
  }
}

export default JobGroupItem;