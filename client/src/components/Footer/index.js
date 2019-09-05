import React from 'react'
import './style.css'

function Footer() {
    return (
        <footer className='footer rounded text-white'>
            <div className="container d-flex justify-content-center">
                <div className="row mt-1">
                <a href="/contact">Contact Us</a>
                <p className="mx-4">|</p>
                <a href="/about">About Us</a>
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