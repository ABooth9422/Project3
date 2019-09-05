import React from "react";
import Wrapper from '../../components/Wrapper'
import Jumbotron from '../../components/Jumbotron'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Container from '../../components/Container'
import "./style.css"

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
              <div id="mainContent">
              <h1 className="head display-3 rounded text-center my-5 text-black">Welcome to GymSense</h1>
              <p id="intro"className="my-1 mb-5 text-center">We are a very intuitive app that will provide you with all of the tools you need with your day to day workout routine.
                 If you’re having trouble finding a gym near your area, GymSense will give you the opportunity to narrow those results and find the best gym that’s suitable for you! 
                 After generating a profile you will be able to create and store your own workout routines and search for those that you feel would fit you best! The most unique part
                of GymSense is that you will be able to collaborate with other individuals via the forum to discuss and possibly get tips and tricks to enhance your workout routine! 
                </p>
                <h3 className="text-center mb-5">Are you ready for: <span id="sense">GYMSENSE!</span></h3>
              </div>
              <h1 className="head display-3 mb-3 rounded text-center my-5 text-black">Testimonials</h1> 
              <div className="testimonial container py-3 my-5">
                <div className='row'>
                    <div className="col-lg-3 col-12 d-flex flex-wrap justify-content-end">
                    <img alt="test"width="200px" height="200px"src={require('./test.png')}></img>
                    </div>
                    <div className="col-lg-9 col-12 d-flex text-left align-self-center">
                    <p style={{"white-space": "pre-line"}}>{["Gymsense made getting back to the gym so much easier","-Jarvis"].join('\n')}</p>
                    </div>
                    </div>
                </div>  
                <div className="testimonial rounded container py-3 my-5">
                <div className='row'>
                    <div className="col-lg-9 col-12 d-flex justify-content-end align-self-center">
                    <p style={{"white-space": "pre-line"}}>{["Gymsense made getting back to the gym so much easier","-Mark"].join('\n')}</p>
                    </div>
                    <div className="col-lg-3 col-12 d-flex justify-content-start">
                    <img alt="test"width="200px" height="200px"src={require('./test.png')}></img>
                    </div>
                    </div>
                </div>  
                <div className="testimonial rounded container py-3 my-5">
                <div className='row'>
                    <div className="col-lg-3 col-12 d-flex justify-content-end">
                    <img alt="test"width="200px" height="200px"src={require('./test.png')}></img>
                    </div>
                    <div className="col-lg-9 col-12 d-flex text-left align-self-center">
                    <p style={{"white-space": "pre-line"}}>{["Gymsense made getting back to the gym so much easier","-Mark"].join('\n')}</p>
                    </div>
                    </div>
                </div>  
          </Container>
        </Wrapper>
        <Footer/>
      </div>
    );
  }
}

export default Home;