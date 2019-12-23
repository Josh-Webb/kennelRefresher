import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-ownerName">Elena</span></h3>
        </div>
      </div>
    );
  }
}

export default OwnerCard;