import React, { Component } from "react";
import Wrapper from './components/Wrapper'
import Jumbotron from './components/Jumbotron'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Container from './components/Container'
import "./App.css";

class App extends Component {

  state={
    location:[]
  }

   getLocation=()=> {
      navigator.geolocation.getCurrentPosition(this.showPosition);
  }
    showPosition=(position)=>{
      this.setState({location:{position}})
      console.log(this.state.location)
    }
   componentDidMount(){
     this.getLocation()
   } 
  

  render() {
    return (
      <div className="App">
        <Wrapper>
          <Navbar/>
          <Jumbotron/>
          <Container>
            
          </Container>
        </Wrapper>
        <Footer/>
      </div>
    );
  }
}

export default App;
