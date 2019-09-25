import React,{Component} from "react";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import Logo from "../../components/Logo"
import GymTube from "../../components/Youtube"
import API from "../../utils/API"
import DynamicForm from "../../components/DynamicForm"
import StepOne from "../../components/StepOne"
import StepTwo from "../../components/StepTwo"
import "./style.css";


class Routine extends Component {
  
  state={
    info:false,
    workouts:null,
    muscleGroups:null
  }

  steps = [
    {name: 'StepOne', component: null},
    {name: 'StepTwo', component: null},

  ]
  

  componentDidMount(){
    API.getWorkouts().then(res=>{
      this.setState({workouts:res.data})
      const muscleGroups=Array.from(new Set(this.state.workouts.map(workout=>workout.muscleGroup))).sort()
      this.setState({muscleGroup:muscleGroups})
      this.steps[0].component= <StepOne muscleGroups={this.state.muscleGroups}/>
      this.steps[1].component= <StepTwo/>

    })
  }

  
  render(){

  return (
    <>
    <Wrapper>
      <Container>
            <header className="my-5 p-5rounded">
            <div className="routine__bg p-5 "></div>
              <h1 id="routineHead" className="display-1 rounded mt-5 text-black">Build a Routine!</h1> 
            </header>
        <div className="mainStuff">
        {this.state.info?<GymTube/>:<Logo style={{"boxShadow":"black 3px 3px 3px"}}class={"bg-white gymsensei rounded"}image={require("./images/GYMSENSEi.png")}/>  }
        <DynamicForm steps={this.steps}/>
        <button type="button" onClick={()=>this.setState({info:true})}>testing</button>
        </div>
            <div className="row p-5">
            <h3 className="text-white text-center">We will help you every step of the way! Here we will help you build a routine thats custom to your needs.
            We will give you some insight of what to look for if you have no prior workout experience. If you have a general idea of what you want to 
            do you can use our calendar to make your own workout schedule.</h3>
            </div>
      </Container>
    </Wrapper>
    </>
  );
  }
}

export default Routine;
