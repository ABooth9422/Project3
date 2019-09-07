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
            <div className="container d-flex justify-content-center">
            <div className="row">
                <p>&copy; Gym Sense</p>
                </div>
                </div>
        </footer>
    )
}

export default Footer;