import React, { Component } from 'react';
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';
import './style.css'

 

class Map extends Component {
  constructor(){
      super()

      this.state = {

      }

  }


  render() {
    return (
      <GoogleMap defaultZoom={10} defaultCenter={{lat: 35.7796, lng: -78.6382}} />
    )
  }
}

export default Map;


 
