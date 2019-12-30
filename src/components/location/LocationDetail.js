import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'

class LocationDetail extends Component {

    state = {
        address: "",
        city: "",
        loadingStatus: true,
    }

    componentDidMount(){
        console.log("LocationDetail: ComponentDidMount");
        LocationManager.get(this.props.locationId)
        .then((location) => {
            this.setState({
            address: location.address,
            city: location.city,
            loadingStatus: false
        });
      });
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <p>Details</p>
                    <h3>Address: {this.state.address}</h3>
                    <p>{this.state.city}</p>
                    <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>
                </div>
            </div>
        );
    }

    handleDelete = () => {
        this.setState({loadingStatus: true})
        LocationManager.delete(this.props.locationId)
        .then(() => this.props.history.push("/locations"))
    }
}

export default LocationDetail;

