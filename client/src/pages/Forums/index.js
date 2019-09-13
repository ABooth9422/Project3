import React from "react";
import Container from "../../components/Container";
import Jumbotron from "../../components/Jumbotron";
import Wrapper from "../../components/Wrapper"
import Footer from "../../components/Footer"
import "./style.css"

function Forum() {
  return (
    <>
    <Wrapper>
    <Jumbotron/>
      <Container>
      <div className='container justify-content-center p-5'>    
            <h1>Forum Page</h1>
            <p>The Gym Sense forums are a place to ask questions, discuss routines, debate dietary practices, 
              or share personal accomplishments to inspire others. Please be considerate and respectful to other
              Gym Sense members. Moderators reserve the right to delete any content deemed unfit for the Gym Sense forum.
            </p>            
      </div>
      </Container>
    </Wrapper>
    <Footer/>
    </>
  );
}

export default Forum;
