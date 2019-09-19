import React from "react";
import Wrapper from '../../components/Wrapper'
import Jumbotron from '../../components/Jumbotron'
import Footer from '../../components/Footer'
import Container from '../../components/Container'


import "./style.css"

class Home extends React.Component {

  constructor(){
    super()

    this.state={
      user: {},
      location:[]
    }
  }

  
  render() {

    return (
      <div className="home">
        <Wrapper>
          <Jumbotron/>
            <Container>
              <div id="mainContent my-5">
              <header className="my-5 rounded">
              <div className="header__bg "></div>
              <h1 id="gymsenseMain"className="display-1 rounded mt-5 text-black">GymSense</h1>
              </header>
              
              <p id="intro"className="my-1 mb-5 text-center">We are a very intuitive app that will provide you with all of the tools you need with your day to day workout routine.
                 If you’re having trouble finding a gym near your area, GymSense will give you the opportunity to narrow those results and find the best gym that’s suitable for you! 
                 After generating a profile you will be able to create and store your own workout routines and search for those that you feel would fit you best! The most unique part
                of GymSense is that you will be able to collaborate with other individuals via the forum to discuss and possibly get tips and tricks to enhance your workout routine! 
                </p>
                <h3 className="text-center mb-5">Are you ready for: <span id="sense">GYMSENSE!</span></h3>
              </div>
              <h2 className="head display-1 rounded text-center text-black">Testimonials</h2> 
              <div style={{"margin":"40%"}}className="testimonial d-flex rounded container py-3 my-5">
                <div className='row'>
                    <div className="col-lg-9 col-12 justify-content-end align-self-center">
                    <p className="text-center p-2"style={{"whiteSpace": "pre-line"}}>{["Not having an active workout schedule in the past, GymSense has been a great PT in supporting my training objectives. GymSense is outcome focused, and I have been able to see continual improvement from my sessions. Thank you for being supportive with training efforts!","-Mark"].join('\n')}</p>
                    </div>
                    <div className="col-lg-3 col-12 justify-content-start">
                    <img className="testImg rounded-circle"alt="test"width="200px" height="200px"src={require('./images/mark.jpg')}></img>
                    </div>
                    </div>
                </div>  
                <div style={{"margin":"10%"}}className="testimonial  rounded container py-3 my-5">
                <div className='row d-flex'>
                    <div className="col-lg-3 col-12 justify-content-start">
                    <img style={{"left":"-100%"}}id="jarvis"className="testImg rounded-circle mr-5 position-relative "alt="test"width="200px" height="200px"src={require('./images/jbpic.jpg')}></img>
                    </div>
                    <div className="col-lg-9 col-12 justify-content-end align-self-center">
                    <p className="text-center p-2" style={{"whiteSpace": "pre-line"}}>{["What I like about GymSense is that they know how to motivate me. They make each of my training sessions challenging but rewarding. I would have no hesitation in recommending GymSense as your training source if you want to achieve your fitness and health goals.","-Jarvis"].join('\n')}</p>
                    </div>

                    </div>
                </div> 
                <div style={{"margin":"40%"}}className="testimonial d-flex rounded container py-3 my-5">
                <div className='row'>
                    <div className="col-lg-9 col-12 justify-content-end align-self-center">
                      
                    <p className="text-center p-2"style={{"whiteSpace": "pre-line"}}>{["Simply, with their help I achieved my goal of putting on weight, one which I have struggled with for years. With their help I have gained 13kg+ and my strength has more than doubled. GymSense really helped me by giving me the tools to grow with their training regimes.","-Louis"].join('\n')}</p>
                    
                    </div>
                    <div className="col-lg-3 col-12 justify-content-start">
                    <img className="testImg rounded-circle"alt="test"width="200px" height="200px"src={require('./images/louis.jpg')}></img>
                    </div>
                    </div>
                </div>  
          </Container>
        </Wrapper>
      </div>
    );
  }
}

export default Home;




 
 

 