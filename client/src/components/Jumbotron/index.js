import React, { Component } from 'react';

import './style.css'


class Jumbotron extends Component {

    state={
        imgURL:require("./images/backdrop.jpg")
    }
    componentDidMount=()=>{
        let imgArray=[require("./images/rings.jpg"),require("./images/kaiju2.jpg"),require("./images/kaiju3.jpg"),require("./images/backdrop.jpg")]
        const random = imgArray[Math.floor(Math.random()* imgArray.length)]
        console.log(random)
        this.setState({imgURL:random})
       
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