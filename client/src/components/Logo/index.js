import React from 'react'
import './style.css'

function Logo(props){
    return(
        <div className="d-flex justify-content-center">
        <img id="logo" style={props.style} className={props.class} src={props.image} width="800px"height="250px"alt="logo"></img>
        </div>
    )
}
export default Logo;