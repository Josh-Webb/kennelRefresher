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
                <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => {this.props.history.push("/locations/new")}}>
                            New Location

                    </button>
                </section>
                {this.state.locations.map(location => <LocationCard key={location.id} location={location} deleteLocation={this.deleteLocation}/>)}
            </div>
        )
    }

    deleteLocation = id => {
        LocationManager.delete(id)
            .then(() => {
                LocationManager.getAll()
                    .then((newLocations) => {
                        this.setState({
                            locations: newLocations
                        })
                    })
            })
    }
}

export default LocationList