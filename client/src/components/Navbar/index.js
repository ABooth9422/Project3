import React from 'react'

import './style.css'

function Navbar(props) {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg myNavbar">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <h2><span id="badge"className="badge badge-dark"><img alt="logo"height="50px"src={require("../Jumbotron/images/gymsense.png")}></img></span></h2>
                <ul className="navbar-nav mr-auto myNavs">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/find">Find A Gym</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/exercise">Find an Excercise</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/visitForums">Visit Forums</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/viewProfile">View Profile</a>
                    </li>
                    
                </ul>
                {props.children}
            </div>
        </nav>
    )
}

export default Navbar;