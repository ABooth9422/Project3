import React from "react";
import Wrapper from '../../components/Wrapper'
import Jumbotron from '../../components/Jumbotron'
import Navbar from '../../components/Navbar'
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
            
          </Container>
        </Wrapper>
        <Footer/>
      </div>
    );
  }
}

export default Home;




 
 

 