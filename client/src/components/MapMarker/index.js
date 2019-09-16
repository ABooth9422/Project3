import React from 'react'
import markerStyle from './markerStyle'
import './style.css'

class MapMarker extends React.Component{

    constructor(){
        super();
    }

    render(){
        return <div style={markerStyle}>Hello</div>
    }


}

export default MapMarker;

