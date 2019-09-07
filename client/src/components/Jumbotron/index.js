import React, { Component } from 'react';

import './style.css'


class Jumbotron extends Component {

    state={
        imgURL:require("./images/backdrop.jpg")
    }
    render(){   
    return (
            <>
            <div className="jumbotron myJumbotron mb-0 text-center"style={{"backgroundImage": 'url(' + this.state.imgURL + ')'}}>
               <img id="logo"className="d-flex justify-content-start"src={require('./images/gymsense.png')} width="800px"height="250px"alt="logo"></img>
             </div>
            </>
    )
    }
}

export default Jumbotron;