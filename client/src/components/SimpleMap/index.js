import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './style.css'
 
const AnyReactComponent = ({ text }) => <div className="mapMarker">{text}</div>;
 
class SimpleMap extends Component {

    constructor(props){
        super(props)

        this.state = {
            map: {
                center: {
                    lat: 35.8140004,
                    lng: -81.0454212
                  },
                  zoom: 11
            },

            gyms: []
        }

    }

  loadMarkers(){

  }
 
  render() {
    console.log(process.env);
    return (
        
      // Important! Always set the container height explicitly
      <div className='myMap' style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAr9PzQqMpjaO5J9DqQxj1PfR2W2XwhORA'}}
          defaultCenter={this.state.map.center}
          defaultZoom={this.state.map.zoom}
        >
          <AnyReactComponent
            lat={this.state.map.center.lat}
            lng={this.state.map.center.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;