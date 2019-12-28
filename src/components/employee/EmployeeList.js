import React, { Component } from 'react'
import EmployeeCard from './EmployeeCard'
import EmployeeManager
from '../../modules/EmployeeManager'

class EmployeeList extends Component {
    state = {
        employees: [],
    }

    componentDidMount(){
        console.log("EMPLOYEE LIST: ComponentDidMount");
        EmployeeManager.getAll()
        .then((employees) => {
            this.setState({
                employees: employees
            })
        })
    }

    render(){
        console.log("EMPLOYEE LIST: Render");

        return(
            <div className="container-cards">
                {this.state.employees.map(employee => <EmployeeCard />)}
            </div>
        )
    }
}

export default EmployeeList