import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Address: <span className="card-locationStreetAddress">{this.props.location.address}</span></h3>
          <p>City: {this.props.location.city}</p>
        </div>
      </div>
    );
  }
}

export default LocationCard;