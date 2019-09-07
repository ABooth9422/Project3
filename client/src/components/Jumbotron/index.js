import React from 'react'
import './style.css'

function Jumbotron() {
    return (
        
            <div className="jumbotron myJumbotron mb-0 text-center">
                <img id="logo"className="d-flex justify-content-start"src={require('./images/gymsense.png')} width="800px"height="250px"alt="logo"></img>
            </div>
        // <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
        // <div class="carousel-inner">
        //   <div class="carousel-item active" data-interval="10000">
        //     <img src="..." class="d-block w-100" alt="...">
        //   </div>
        //   <div class="carousel-item" data-interval="2000">
        //     <img src="..." class="d-block w-100" alt="...">
        //   </div>
        //   <div class="carousel-item">
        //     <img src="..." class="d-block w-100" alt="...">
        //   </div>
        // </div>
    )
}

export default Jumbotron;