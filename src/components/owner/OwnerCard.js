import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-ownerName">{this.props.owner.name}</span></h3>
          <p>Phone Number: {this.props.owner.phoneNumber}</p>
        </div>
      </div>
    );
  }
}

export default OwnerCard;