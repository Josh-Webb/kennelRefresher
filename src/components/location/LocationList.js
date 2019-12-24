import React, { Component } from 'react'
import LocationCard from './LocationCard'
import LocationManager
from '../../modules/LocationManager'

class LocationList extends Component {
    state = {
        locations: [],
    }

    componentDidMount(){
        console.log("LOCATION LIST: ComponentDidMount");
        LocationManager.getAll()
        .then((locations) => {
            this.setState({
                locations: locations
            })
        })
    }

    render(){
        console.log("LOCATIONS LIST: Render");

        return(
            <div className="container-cards">
                {this.state.locations.map(location => <LocationCard />)}
            </div>
        )
    }
}

export default LocationList