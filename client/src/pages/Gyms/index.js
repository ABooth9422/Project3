import React,{Component} from "react";
import Container from "../../components/Container";
import Jumbotron from "../../components/Jumbotron";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";
import GymCard from "../../components/GymCard";
import Form from '../../components/Form';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import SimpleMap from "../../components/SimpleMap";
import "./style.css";
import API from "../../utils/API";

class Gyms extends Component{
  constructor(){
    super()
  this.state={
    query: '',
    location:[],
    disabled:false,
    checked:false,
    searched:false,
    optionsState:"Type of Gym",
    gymArray:[]
  }
  this.getLocation = this.getLocation.bind(this);
  }

  checkInput=()=>{
    let location= document.getElementById("location").value
 
    let useLocation=document.getElementById("useLocation").checked
    API.getGyms((data)=>{
      this.setState({gymArray:data.data.results})
      console.log(data)
    })
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

  formSubmit = (event) =>{
    console.log(this.state.query);
    this.setState({query: ''});
  }

  inputChange = (event) =>{
    this.setState({query: event.target.value});
  }

  render(){
  
  return (
    <>
    <Wrapper>
    <Jumbotron/>
      <Container className='container myContainer  rounded p-3 my-5'>
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
          
        </div>
        <div className='row text-center justify-content-center'>
            <div className='col-12 col-md-6 '>
              <Form>
                <TextInput id='gymSearch' label='Enter Address' changeHandle={this.inputChange}>{this.state.query}</TextInput>
                <Button type='button' bootType='danger' clickHandle={this.formSubmit} >GO</Button>
              </Form>
            </div>
        </div>
        <div className='row text-center justify-content-center'>
            <div className='col-12 col-md-6 my-3'>
              {/* <SimpleMap></SimpleMap> */}
            </div>
        </div>
      </Container>
    </Wrapper>
    <Footer/>
    </>
  );
  }
}

export default Gyms;
