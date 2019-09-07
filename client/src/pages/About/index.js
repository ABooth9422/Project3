import React from "react";
import Container from "../../components/Container";
import Jumbotron from "../../components/Jumbotron";
import Wrapper from "../../components/Wrapper"
import Footer from "../../components/Footer"
import {Link} from "react-router-dom"
import "./style.css"

function About(){
    return(
        <>
        <Wrapper>
        <Jumbotron/>
          <Container>
          <div className="page mx-5 my-5">
          <div className="ml-5 mr-5 mt-3 text-white" id="About">
            <h1 style={{"textDecoration":"underline","padding":"0"}}className="font-weight-bold display-1">About</h1>
            <p className="p-3 text-center">Here at gymsense we care! We want to get your confidence back in the gym if you have any
            helpful suggestions of what we can do please <Link style={{"color":"red"}}to="/contact"> Contact Us</Link>. About our developers
            we all came from a background where we let stress and life get the best of us. We envisioned a application that would help us get back
            in the gym and find a gym that would help us with our goals we were trying to achieve.
            </p>
            <p className="p-3 mb-5 text-center">
              In this application our goal is to help you find a gym that tapers to you if you workout independently or if you like to workout with a group.
              We will help you find a gym that suits you. Another feature that we have is the ability for you to create your own routine. We will
              give you the tools you need to be able to create a daily routine that you can implement with your schedule.
            </p>
            </div>
            </div>
          </Container>
        </Wrapper>
        <Footer/>
        </>
    )
}

export default About;