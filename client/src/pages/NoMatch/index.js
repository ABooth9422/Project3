import React from "react";
import Container from "../../components/Container";
import Jumbotron from "../../components/Jumbotron";
import Wrapper from "../../components/Wrapper"
import Footer from "../../components/Footer"
import "./style.css"

function NoMatch() {
  return (
    <>
    <Wrapper>
    <Jumbotron/>
      <Container>
      <div id="noMatch"className='container text-white p-5'>    
            <div className="row d-flex justify-content-center ">
            <h1>404 Page Not Found</h1>
            </div>
            <div class="row my-2 display-4 d-flex justify-content-center">
            <p>You dropped the bar. Thats a no rep!</p>
            </div>
            <div className="row my-5 d-flex justify-content-center ">
            <img id="noMatchImage"width="600px" height ="200px"src={require("./images/barbell.png")} alt="barbell"/>
            </div>
      </div>
      </Container>
    </Wrapper>
    <Footer/>
    </>
  );
}

export default NoMatch;
