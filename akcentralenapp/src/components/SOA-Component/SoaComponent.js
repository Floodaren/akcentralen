import React, { Component } from 'react';
import './SoaComponent.css';
import axios from 'axios';

class SoaComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { imgURL: "", showEventPic: true};
        this.removeEventPicture = this.removeEventPicture.bind(this);
        this.showEventPicture = this.showEventPicture.bind(this);
    }

    removeEventPicture() {
        this.setState({ showEventPic: false });
    }

    showEventPicture(){
        this.setState({ showEventPic: true });
    }

    componentDidMount() {
        var self = this;
        axios.get('http://decoreapp.azurewebsites.net/api/events/12', {
        })
            .then(function (response) {
                self.setState({ imgURL: response.data.ImageURL });
                return response;
            })
            .catch(function (error) {
                alert("Eventet finns inte");
                console.log(error);
            });
    }

    render() {
        let eventPic = "";
        if (this.state.showEventPic === true)
        {
            eventPic = <img id="eventPic" src={this.state.imgURL} alt="" />;
        }
        return (
            <div>
                <div className="col-sm-12" id="showRemoveEventButtons">
                    <button className="btn btn-primary" id="showEventPicture"  onClick={this.showEventPicture}>Visa eventbild</button>
                    <button className="btn btn-primary" id="removeEventPicture"  onClick={this.removeEventPicture}>Ta bort eventbild</button>
                </div>
                <div className="col-sm-12">
                    {eventPic}
                </div>
            </div>
        );
    }
}

export default SoaComponent;