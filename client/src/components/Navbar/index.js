import React from 'react'
import {Link} from 'react-router-dom'

import './style.css'

function Navbar(props) {
    let links;
    if(!props.auth){
        links=
            <>
            <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/find">Find A Gym</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/exercise">Find an Excercise</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/visitForums">Visit Forums</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/viewProfile">View Profile</Link>
            </li>
            </>
    }else{
        links=
        <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
        </li>
                   
    }
    return (
        <nav className="navbar navbar-dark navbar-expand-lg myNavbar">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <h2><span id="badge"className="badge badge-dark"><img alt="logo"height="50px"src={require("../Jumbotron/images/gymsense.png")}></img></span></h2>
                <ul className="navbar-nav mr-auto myNavs">
                    {links}
                </ul>
                {props.children}
            </div>
        </nav>
    )
}

export default Navbar;