import React from "react";
import Wrapper from '../components/Wrapper'
import Jumbotron from '../components/Jumbotron'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Container from '../components/Container'

class Home extends React.Component {

  state={
    location:[]
  }

   getLocation() {
      navigator.geolocation.getCurrentPosition(this.showPosition);
  }
    showPosition = (position)=>{
      this.setState({location: position})
      console.log(this.state.location)
    }
   componentDidMount(){
     this.getLocation()
   } 

   signInHandle(code){
    console.log(code)
   }

  render() {
    return (
      <div className="home">
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

export default Home;