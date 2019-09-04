import React from 'react'
import './style.css'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg myNavbar">
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav myNavs">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Find A Gym</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Find an Excercise</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Visit Forums</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">View Profile</a>
                    </li>
                    
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;