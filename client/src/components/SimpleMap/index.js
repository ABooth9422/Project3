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
                    lat: 0,
                    lng: 0
                  },
                  zoom: 11
            },

            gyms: []
        }

    }

  
  componentDidMount(){
    // this.setState({
    //   map: {
    //     center: {
    //       lat: this.props.center.lat,
    //       lng: this.props.center.lng
    //     },
    //     zoom: 11
    //   }
    // });
  }
  loadMarkers(){

  }
 
  render() {
    return (
        
      // Important! Always set the container height explicitly
      <div className='myMap' style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAr9PzQqMpjaO5J9DqQxj1PfR2W2XwhORA'}}
          defaultCenter= {{
            lat: 0,
            lng: 0
          }}
          defaultZoom={this.state.map.zoom}
          center={this.props.center}
        >
          <AnyReactComponent
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            text="Home"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;