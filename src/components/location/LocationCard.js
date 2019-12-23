import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Address: <span className="card-locationStreetAddress">1901 Sevier St</span></h3>
          <p>City: Nashville, TN </p>
        </div>
      </div>
    );
  }
}

export default LocationCard;