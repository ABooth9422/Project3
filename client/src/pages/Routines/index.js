import React from "react";
import Container from "../../components/Container";
import Jumbotron from "../../components/Jumbotron";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";
import "./style.css";
import GymCalendar from "../../components/GymCalendar";


function Routine() {
  return (
    <>
    <Wrapper>
    <Jumbotron/>
      <Container>
      <div id="noMatch"className='container my-5 d-flex justify-content-center p-5'>    
            <h1>Build a Routine!</h1> 
            <p>We will help you every step of the way! Here we will help you build a routine thats custom to your needs.</p>
      </div>
      <div className="calendar">
      <GymCalendar/>
      </div>

      </Container>
    </Wrapper>
    <Footer/>
    </>
  );
}

export default Routine;
