import React from "react";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";
import "./style.css";
import GymCalendar from "../../components/GymCalendar";
import Logo from "../../components/Logo"


function Routine() {
  return (
    <>
    <Wrapper>
      <Container>
      <Logo style={{"boxShadow":"black 3px 3px 3px"}}class={"bg-white rounded mt-5"}image={require("./images/GYMSENSEi.png")}/>  

          
            <h1 className="text-center my-5 display-1 text-white">Build a Routine!</h1> 
            
            <div className="row p-5">
            <p className="text-white text-center">We will help you every step of the way! Here we will help you build a routine thats custom to your needs.
            We will give you some insight of what to look for if you have no prior workout experience. If you have a general idea of what you want to 
            do you can use our calendar to make your own workout schedule.</p>
            </div>
        <div className="row">
       <div className="col-lg-7 p-5">
         <div className="bg-secondary rounded p-5">
        <p className=" text-center">From the calendar to your right please select a day where you want to create a routine for!</p>
        <p className= "text-center">Keep in mind of what your goals are whether you want to have a stronger upperbody or if you want to
        focus on your lower body with movements such as squats. We want to provide a well balanced routine for you to help you reach your goals</p>
       </div>
       </div>
       <div className="col-lg-5">
      <div className="calendar">
      <GymCalendar/>
      </div>
      </div>
      </div>
      </Container>
    </Wrapper>
    </>
  );
}

export default Routine;
