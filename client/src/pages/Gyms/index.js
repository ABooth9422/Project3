import React,{Component} from "react";
import Container from "../../components/Container";
import Jumbotron from "../../components/Jumbotron";
import Wrapper from "../../components/Wrapper"
import Footer from "../../components/Footer"
import GymCard from "../../components/GymCard"
import SimpleMap from "../../components/SimpleMap"
import "./style.css"
import API from "../../utils/API"

class Gyms extends Component{
  constructor(){
    super()
  this.state={
    location:[],
    disabled:false,
    checked:false,
    searched:false,
    optionsState:"Type of Gym"
  }
  this.getLocation = this.getLocation.bind(this);
  }

  checkInput=()=>{
    let location= document.getElementById("location").value
    console.log(location)
    let useLocation=document.getElementById("useLocation").checked
    // API.getGyms()
    this.setState({searched:true})
    if(useLocation){
      this.getLocation()
    }
  }
  getLocation() {
    navigator.geolocation.getCurrentPosition(this.showPosition);
  }
  showPosition = (position)=>{
    this.setState({location: position})
    console.log(this.state.location)
  }
  checkboxLocation = () =>{
    let useLocation=document.getElementById("useLocation").checked
    console.log(useLocation)
    if(!this.state.checked){
      this.setState({checked:true})
      console.log(useLocation)
    }else{
      this.setState({checked:false})
      console.log(useLocation)
      
    }
  }

  useLocation=()=>{
    if(!this.state.disabled){
      this.setState({disabled:true})
    }else{
      this.setState({disabled:false})
    }
      
  }

  render(){
    let page;
      if(!this.state.searched){
        page=
        <>
          <div className="row d-flex justify-content-center text-center">
          <h1 className="display-1">Find your Gym!</h1>
          </div>
          <div className="row d-flex my-5 justify-content-center text-center">
          <h3>Were here to help you get started we are going to help you find a gym in your area.</h3>
          </div>
          <div className="row d-flex my-3  justify-content-center text-center">
          <h3>Tell us what kind of gym your looking for if you would rather workout at a gym where you can do your own routine alone.
            If you want to workout in a group aspect or if you want to view all of the gyms.
          </h3>
          </div>
          <div className="container-fluid d-flex justify-content-center">
          <form className="text-white font-weight-bold ">
          <div className="row my-5 d-flex justify-content-center">
          <div className="col-3">
              <div className="dropdown">
            
              <select value={this.optionsState} className="custom-select" id="gymPref" style={{"width":"100%"}}>

                <option value="All">All Gyms</option>
                <option value="Alone">Workout Alone</option>
                <option value="Group">Workout with a group</option>
                </select>
       
            </div>
            </div>
          <div className="col-4">
          <input type="text" placeholder="Enter your location"  disabled = {this.state.disabled} id="location"className="form-control disabled"/>
          </div>

            <div className="col-5">
              <label style={{"fontSize":"20px"}}><input type="checkbox" onClick={this.useLocation} checked={this.state.checked}
              onChange={this.checkboxLocation} id="useLocation"/>Click to use your location</label>
              </div>

              </div>
              <div className="row d-flex justify-content-center">
              <button type="button" style={{"boxShadow":"black 3px 3px 3px"}} id="locationSubmit" onClick={this.checkInput} className="btn btn-secondary btn-lg my-2">Submit</button>
              </div>
    
            </form>
        </div>
        </>
      }else{
        page=
        <>
           <div className="row d-flex justify-content-center text-center">
          <h1 className="display-1">Gyms for you!</h1>
          </div>
          <div className="row d-flex justify-content-center text-center">
            {/* <GymCard /> */}
            <SimpleMap/>
          </div>
        </>
      }
    
  return (
    <>
    <Wrapper>
    <Jumbotron/>
      <Container>
      <div id="noMatch"className='text-white my-5 p-5'>    
          {page}
      </div>
        
      </Container>
    </Wrapper>
    <Footer/>
    </>
  );
  }
}

export default Gyms;
