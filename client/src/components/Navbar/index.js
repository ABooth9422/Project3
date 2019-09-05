import React from 'react'
import GoogleSignIn from '../GoogleSignIn'
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
                    <li>
                    <GoogleSignIn>Test</GoogleSignIn>
                    </li>
                    
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" id="accountName"type="text" placeholder="Account Name" label="Account"/>
                    <input className="form-control mr-sm-2"id="password"type="password" placeholder="Password" label="Account"/>
                    <input className="btn btn-dark my-2 mx-2" id="clientLogin" type="button" value="Client Login"></input>
                    <input className="btn btn-dark my-2 mx-2 my-sm-0" data-toggle="modal" type="button" value="Register"></input>
                </form>
            </div>
        </nav>
    )
}

export default Navbar;