import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
//only include these once they are built - previous practice exercise
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalDetail from './animal/AnimalDetail'
import LocationDetail from './location/LocationDetail'
import AnimalForm from './animal/AnimalForm'
import LocationForm from './location/LocationForm'
import EmployeeForm from './employee/EmployeeForm'
import OwnerForm from './owner/OwnerForm'


class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
       {/* Make sure you add the `exact` attribute here */}
        <Route exact path="/animals" render={(props) => {
          return <AnimalList {...props}/>
        }} />
        <Route path="/animals/:animalId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props}/>
        }} />
        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />

        {/*
          This is a new route to handle a URL with the following pattern:
          http://localhost:3000/animals/1

          It will not handle the following URL because the `(\d+)`
          matches only numbers after the final slash in the URL
          http://localhost:3000/animals/jack
        */}

        <Route exact path="/locations" render={(props) => {
          return <LocationList {...props}/>
        }} />
        <Route path="/locations/:locationId(\d+)" render={(props) => {
          return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props}/>
        }} />
        <Route path="/locations/new" render={(props) => {
          return <LocationForm {...props} />
        }} />
        <Route exact path="/employees" render={(props) => {
          return <EmployeeList {...props}/>
        }} />
        <Route path="/employees/new" render={(props) => {
          return <EmployeeForm {...props} />
        }} />
        <Route exact path="/owners" render={(props) => {
          return <OwnerList {...props}/>
        }} />
        <Route path="/owners/new" render={(props) => {
          return <OwnerForm {...props}/>
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews