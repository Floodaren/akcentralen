import React, { Component } from 'react';
import './JobGroupItem.css';
import Modal, {closeStyle} from 'simple-react-modal';

class JobGroupItem extends Component {
  constructor()
  {
    super();
    this.state = {showModal: false}
    this.show = this.show.bind(this);
    this.close = this.close.bind(this);
  }

  show()
  {
    this.setState({showModal: true});
  }

  close()
  {
    this.setState({showModal: false});
  }


  render() {
    let showChangeModal = "";
    if (this.state.showModal === true)
    {
      showChangeModal = <Modal show={this.show} onClose={this.close}>
      <div id="ChangeJobInfoModal">
        <div class="form-group">
          <label for="usr">Name:</label>
            <input type="text" className="form-control" id="usr"></input>
        </div>
      </div>
      </Modal>  
    }
    else 
    {
      showChangeModal = "";
    }
    return (
      <li id="jobbItem">
        <div className="row">
          {showChangeModal}
          <div className="col-sm-2 col-md-offset-1">{this.props.jobDetails.butikId}</div>
          <div className="col-sm-2">{this.props.jobDetails.butiksNamn}</div>
          <div className="col-sm-2">{this.props.jobDetails.jobStatus}</div>
          <div className="col-sm-2"><button className="btn btn-primary" id="ChangeJobButton" type="button" onClick={this.show}>Ändra</button></div>
          <div className="col-sm-2"><button className="btn btn-primary" id="ChangeJobButton" type="button" onClick={this.show}>Ta bort</button></div>                    
          </div>
          <hr/>
      </li>
    );
  }
}

export default JobGroupItem;