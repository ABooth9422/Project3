import React,{Component} from "react";
import Container from "../../components/Container";
import Jumbotron from "../../components/Jumbotron";
import Wrapper from "../../components/Wrapper";
import GymCard from "../../components/GymCard";
import Form from '../../components/Form';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps';
import "./style.css";
import API from "../../utils/API";

class Gyms extends Component{
  constructor(){
    super()

  this.state={
    WrappedMap: null,
    selectedGym: null,
    query: '',
    center:{lat: 35.779591, lng: -78.638176},
    gyms: []

  }
}
 
  componentDidMount(){
    if(!this.state.WrappedMap){
      this.initMap();
    }
  }
  getLocation = () => {
    navigator.geolocation.getCurrentPosition(this.showPosition);
  }

  showPosition = (position)=>{
    this.setState({location: position})
    console.log(this.state.location)
  }
  

  useLocation=()=>{
    if(!this.state.disabled){
      this.setState({disabled:true})
    }else{
      this.setState({disabled:false})
    }
      
  }

  formSubmit = () => {
    if(this.state.query){
      console.log(this.state.query)
      API.getGymsWithoutLocation(this.state.query).then(res =>{
        this.setState({center: res.data.center, gyms: res.data.gyms, WrappedMap: withScriptjs(withGoogleMap(this.Map)), selectedGym: null});
        console.log(this.state);
      }).catch(err => {
        console.log(err.response);
      })
  }
}

  inputChange = (event) => {
    
    this.setState({
      query: event.target.value,
      renderMap: false
    });
  }

  selectGym(gym){

    this.setState({selectedGym: gym})
    if('photos' in gym){
      API.getGymPhoto(gym.photos[0].photo_reference).then(response => {
        console.log(response.data);
      })
    }
    
  }

  Map =() =>{
    return (
      <GoogleMap defaultZoom={10} defaultCenter={this.state.center}>
        {this.state.gyms.map(gym =>(
          <Marker key={gym.id} 
          position={gym.geometry.location} 
          onClick={()=>{
            this.selectGym(gym);
          }}
          icon={
            {
              url: require('./images/marker.png'),
              scaledSize: new window.google.maps.Size(50,50)
            }
          }
          />
        ))}
      </GoogleMap>
    )
  }
  initMap =()=>{
    this.setState({WrappedMap: withScriptjs(withGoogleMap(this.Map))})
  }

  render(){
    let WrappedMap = this.state.WrappedMap || withScriptjs(withGoogleMap(this.Map));
    
  
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
            <div className='col-12 col-md-6 my-3 mapContainer'>
            <WrappedMap 
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
              loadingElement={<div style={{height: '100%'}}></div>}
              containerElement={<div style={{height: '100%',  maxHeight: '500px'}}></div>}
              mapElement={<div style={{height: '100%'}}></div>}
            />
            </div>
            <div className='col-12 col-md-6 my-3'>
            
            {this.state.selectedGym && (
                
                <GymCard details = 
                {{name: this.state.selectedGym.name, 
                  address: this.state.selectedGym.vicinity, 
                  rating: this.state.selectedGym.rating,
                  img: 'photos' in this.state.selectedGym ? `https://maps.googleapis.com/maps/api/place/photo?maxheight=300&photoreference=${this.state.selectedGym.photos[0].photo_reference}&key=${process.env.REACT_APP_GOOGLE_KEY}`: ''}}/>
              )}
            
            </div>
        </div>
      </Container>
    </Wrapper>
    </>
  );
  }
}

export default Gyms;
