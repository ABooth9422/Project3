import React from "react";
import Container from "../../components/Container";
import Jumbotron from "../../components/Jumbotron";
import Wrapper from "../../components/Wrapper"
import Footer from "../../components/Footer"
import "./style.css"

function Routine() {
  return (
    <>
    <Wrapper>
    <Jumbotron/>
      <Container>
      <div id="noMatch"className='container d-flex justify-content-center p-5'>    
            <h1>Routine Page</h1>
            
      </div>
      </Container>
    </Wrapper>
    <Footer/>
    </>
  );
}

export default Routine;