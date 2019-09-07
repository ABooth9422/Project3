import React from "react";
import Container from "../../components/Container";
import Jumbotron from "../../components/Jumbotron";
import Wrapper from "../../components/Wrapper"
import Footer from "../../components/Footer"
import "./style.css"

function About(){
    return(
        <>
        <Wrapper>
        <Jumbotron/>
          <Container>
         <h1>about</h1>
          </Container>
        </Wrapper>
        <Footer/>
        </>
    )
}

export default About;