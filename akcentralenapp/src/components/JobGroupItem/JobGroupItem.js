import React, { Component } from 'react';
import './JobGroupItem.css';
import Modal from 'simple-react-modal';
import axios from 'axios';

class JobGroupItem extends Component {
  constructor()
  {
    super();
    this.state = {showModal: false, radiobuttonvalue: "", updateState: false}
    this.show = this.show.bind(this);
    this.close = this.close.bind(this);
    this.removeJob = this.removeJob.bind(this);
  }

  onRadioBottonChange(event)
  {
    this.setState({radiobuttonvalue: event});
  }

  show()
  {
    this.setState({showModal: true});
  }

  close()
  {
    this.setState({showModal: false});
  }

  removeJob(indexToRemove)
  {
  let self = this;
  axios.post('http://localhost:3030/removeJob', {
    jobId: indexToRemove
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  self.setState({updateState: true});
  }


  render() {
    let showChangeModal = "";
    if (this.state.showModal === true)
    {
    showChangeModal = <Modal show={this.show} onClose={this.close} containerStyle={{width: '300px'}}>
      <div className="form-group">
        <label for="usr">Butiksnummer:</label>
        <input type="text" className="form-control" id="butiksnummer"/>
      </div>
      <div className="form-group">
        <label for="pwd">Butiksnamn:</label>
        <input type="text" className="form-control" id="butiksnamn"/>
      </div>
      <div className="form-group" id="checkboxDiv">
        <label className="jobCheckbox"><input type="radio" name="optradio" onChange={()=>this.onRadioBottonChange("2")}/><span> </span>Klar</label>
        <label className="jobCheckbox"><input type="radio" name="optradio" onChange={()=>this.onRadioBottonChange("1")}/><span> </span>Påväg</label>
        <label className="jobCheckbox"><input type="radio" name="optradio" onChange={()=>this.onRadioBottonChange("0")}/><span> </span>Inte klar</label>
        <p>{this.state.radiobuttonvalue}</p>
      </div>
      <div className="form-group" id="Savebutton">
        <button className="btn btn-primary">Spara</button>     
      </div>
    </Modal>  
    }
    else 
    {
      showChangeModal = "";
    }

    if(this.state.updateState === true)
    {
      this.props.updatelist();
    }
    return (
      <li id="jobbItem">
        <div className="row">
          {showChangeModal}
          <div className="col-sm-2 col-md-offset-1">{this.props.jobDetails.butikId}</div>
          <div className="col-sm-2">{this.props.jobDetails.butiksNamn}</div>
          <div className="col-sm-2">{this.props.jobDetails.jobStatus}</div>
          <div className="col-sm-2"><button className="btn btn-primary" id="ChangeJobButton" type="button" onClick={this.show}>Ändra</button></div>
          <div className="col-sm-2"><button className="btn btn-primary" id="ChangeJobButton" type="button" onClick={()=>this.removeJob(this.props.jobDetails.id)}>Radera</button></div>                    
          </div>
          <hr/>
      </li>
    );
  }
}

export default JobGroupItem;