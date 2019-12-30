import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'

class LocationDetail extends Component {

    state = {
        address: "",
        city: "",
    }

    componentDidMount(){
        console.log("LocationDetail: ComponentDidMount");
        LocationManager.get(this.props.locationId)
        .then((location) => {
            this.setState({
            address: location.address,
            city: location.city
        });
      });
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h3>Address: {this.state.address}</h3>
                    <p>{this.state.city}</p>
                </div>
            </div>
        )
    }
}

export default LocationDetail;

