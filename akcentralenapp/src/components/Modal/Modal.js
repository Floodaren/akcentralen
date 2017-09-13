import React, { Component } from 'react';
import Modalimport from 'simple-react-modal';
import axios from 'axios';
import Cookies from 'universal-cookie';
import './Modal.css';
const cookies = new Cookies();

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = { showModal: false, radiobuttonvalue: "", butiksnummer: "", butiksnamn: "" }
        this.show = this.show.bind(this);
        this.close = this.close.bind(this);
        this.onRadioBottonChange = this.onRadioBottonChange.bind(this);
        this.onButiksnamnChange = this.onButiksnamnChange.bind(this);
        this.onButiksnummerChange = this.onButiksnummerChange.bind(this);
    }

    onRadioBottonChange(event) {
        this.setState({ radiobuttonvalue: event });
    }

    show() {
        this.setState({ showModal: true });
    }

    close() {
        this.setState({ showModal: false });
    }

    onButiksnamnChange(newName) {
        this.setState({ butiksnamn: newName.target.value });
    }

    onButiksnummerChange(newNumber) {
        this.setState({ butiksnummer: newNumber.target.value });
    }

    newJob(userId, jobStatus) {
        let self = this;
        if (this.state.butiksnummer === "" || this.state.butiksnamn === "" || jobStatus === "")
        {
            alert("Felaktig inmatning, försök igen");
        }
        axios.post('http://localhost:3030/newJob', {
            userId: userId,
            newJobNumber: this.state.butiksnummer,
            newJobName: this.state.butiksnamn,
            newJobStatus: jobStatus
        })
            .then(function (response) {
                console.log(response);
                return response;
            })
            .then(function (response) {
                self.props.updatelist();
            })
            .catch(function (error) {
                console.log(error);
            });
        self.setState({ butiksnummer: "", butiksnamn: "", radiobuttonvalue: "" });
        self.close();
    }

    render() {
        let showChangeModal = "";
        if (this.state.showModal === true) {
            showChangeModal = <Modalimport show={this.show} onClose={this.close} containerStyle={{ width: '300px' }}>
                <div id="modalStyle">
                    <div className="form-group">
                        <label for="usr">Butiksnummer:</label>
                        <input type="text" className="form-control" id="butiksnummer" placeholder="Måste anges" onChange={this.onButiksnummerChange} />
                    </div>
                    <div className="form-group">
                        <label for="pwd">Butiksnamn:</label>
                        <input type="text" className="form-control" id="butiksnamn" placeholder="Måste anges" onChange={this.onButiksnamnChange} />
                    </div>
                    <div className="form-group" id="checkboxDiv">
                        <label className="jobCheckbox"><input type="radio" name="optradio" onChange={() => this.onRadioBottonChange("2")} /><span> </span>Klar</label>
                        <label className="jobCheckbox"><input type="radio" name="optradio" onChange={() => this.onRadioBottonChange("1")} /><span> </span>Utför jobb</label>
                        <label className="jobCheckbox"><input type="radio" name="optradio" onChange={() => this.onRadioBottonChange("0")} /><span> </span>Inte klar</label>
                    </div>
                    <div className="form-group" id="Savebutton">
                        <button className="btn btn-primary" onClick={() => this.newJob(cookies.get('userId'), this.state.radiobuttonvalue)}>Spara</button>
                    </div>
                </div>
            </Modalimport>
        }
        else {
            showChangeModal = "";
        }
        return (
            <div>
                <button id="updateJobButton" className="btn btn-primary" onClick={this.show}>Nytt Jobb</button>
                {showChangeModal}
            </div>
        );
    }
}

export default Modal;