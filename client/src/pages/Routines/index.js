import React,{Component} from "react";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import "./style.css";
import GymCalendar from "../../components/GymCalendar";
import Logo from "../../components/Logo"
import GymTube from "../../components/Youtube"
import API from "../../utils/API"


class Routine extends Component {
  
  state={
    info:false,
    workouts:null,
    muscleGroups:null
  }
  

  componentDidMount(){
    API.getWorkouts().then(res=>{
      this.setState({workouts:res.data})
      const muscleGroups=Array.from(new Set(this.state.workouts.map(workout=>workout.muscleGroup))).sort()
      this.setState({muscleGroup:muscleGroups})
    })
  }


  render(){

 
  return (
    <>
    <Wrapper>
      <Container>
        <div className="mainStuff">
  {this.state.info?<GymTube/>:<Logo style={{"boxShadow":"black 3px 3px 3px"}}class={"bg-white gymsensei rounded"}image={require("./images/GYMSENSEi.png")}/>  }
        <button type="button" onClick={()=>this.setState({info:true})}>testing</button>
        </div>
            <header className="my-5 p-5rounded">
            <div className="routine__bg p-5 "></div>
              <h1 id="routineHead" className="display-1 rounded mt-5 text-black">Build a Routine!</h1> 
            </header>
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
}

export default Routine;
