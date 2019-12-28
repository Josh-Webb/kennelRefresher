import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-employeeName">{this.props.employee.name}</span></h3>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;