import React, { Component } from "react";
import Wrapper from './components/Wrapper'
import Jumbotron from './components/Jumbotron'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Container from './components/Container'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wrapper>
          <Jumbotron/>
          <Navbar/>
          <Container>
            
          </Container>
        </Wrapper>
        <Footer/>
      </div>
    );
  }
}

export default App;
