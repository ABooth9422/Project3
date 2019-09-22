import React, { Component } from 'react';
import './style.css'


class Jumbotron extends Component {


    render(){ 
    return (
            <>
<div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
<div className="carousel-inner">
  <div className="carousel-item active myJumbotron"data-interval="8000">
  <img src={require('./images/backdrop.jpg')} className="myJumbotron" alt="img-2"/>
    <img id="jumboLogo"className="d-flex justify-content-start"src={require('./images/gymsense.png')} width="800px"height="250px"alt="logo"></img>
  </div>
  <div className="carousel-item" data-interval="5000">
    <img src={require('./images/kaiju3.jpg')} className="myJumbotron" alt="img-2"/>
    <img id="jumboLogo"className="d-flex justify-content-start"src={require('./images/gymsense.png')} width="800px"height="250px"alt="logo"></img>
  </div>
  <div className="carousel-item" data-interval="5000">
    <img src={require("./images/kaiju2.jpg")} className="myJumbotron" alt="img-3"/>
    <img id="jumboLogo"className="d-flex justify-content-start"src={require('./images/gymsense.png')} width="800px"height="250px"alt="logo"></img>
  </div>
</div>
</div>

</>
    )
    }
}

export default Jumbotron;