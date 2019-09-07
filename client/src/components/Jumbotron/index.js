import React from 'react'
import './style.css'

function Jumbotron() {
    return (
        
            <div className="jumbotron myJumbotron mb-0 text-center">
                <img id="logo"className="d-flex justify-content-start"src={require('./images/gymsense.png')} width="800px"height="250px"alt="logo"></img>
            </div>
        
    )
}

export default Jumbotron;