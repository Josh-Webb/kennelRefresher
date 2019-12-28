import React, { Component } from 'react'
import OwnerCard from './OwnerCard'
import OwnerManager 
from '../../modules/OwnerManager'

class OwnerList extends Component {
    state = {
        owners: [],
    }

    componentDidMount(){
        console.log("OWNER LIST: ComponentDidMount");
        OwnerManager.getAll()
        .then((owners) => {
            this.setState({
                owners: owners
            })
        })
    }

    render(){
        console.log("OWNER LIST: Render");

        return(
            <div className="container-cards">
                {this.state.owners.map(owner => <OwnerCard key={owner.id} owner={owner} deleteOwner={this.deleteOwner}/>)}
            </div>
        )
    }

    deleteOwner = id => {
        OwnerManager.delete(id)
            .then(() => {
                OwnerManager.getAll()
                    .then((newOwners) => {
                        this.setState({
                            owners: newOwners
                        })
                    })
            })
    }
}

export default OwnerList