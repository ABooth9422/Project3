  
import React from 'react'
import {Link} from 'react-router-dom'

import './style.css'

function Footer() {
    return (
        <footer className='footer text-white'>
            <div className="container d-flex justify-content-center">
                <div className="row mt-1">
                <Link to="/contact">Contact Us</Link>
                <p className="mx-4">|</p>
                <Link to="/about">About Us</Link>
                </div>
                
            </div>
            <div className="container my-1 d-flex justify-content-center">
                <img alt="facebook" className="rounded-circle mx-2" width="50px" height="50px"src={require("./images/facebook.png")}></img>
                <img alt="instagram" className="rounded-circle mx-2" width="50px" height="50px"src={require("./images/instagram.jpg")}></img>
                <img alt="twitter" className="rounded-circle mx-2" width="50px" height="50px"src={require("./images/twitter.png")}></img>
            </div>

            <div className="container d-flex justify-content-center">
            <div className="row">
                <p>&copy; Gym Sense</p>
                </div>
                </div>
        </footer>
    )
}

export default Footer;