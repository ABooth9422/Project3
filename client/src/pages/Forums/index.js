import React from "react";
import Container from "../../components/Container";
import Jumbotron from "../../components/Jumbotron";
import Wrapper from "../../components/Wrapper"
import Footer from "../../components/Footer"
import "./style.css"

function Forum() {
  return (
    <>
    <Wrapper>
    <Jumbotron/>
      <Container>
            <header className="my-5 rounded">
              <div className="forum__bg p-5 "></div>
              <h1 id="forumHead" className="display-1 rounded mt-5 text-black">Forum Page</h1>
              </header>
              <p className="text-center p-5 text-white">The Gym Sense forums are a place to ask questions, discuss routines, debate dietary practices, or share personal accomplishments to inspire others. Please be considerate and respectful to other Gym Sense members. Moderators reserve the right to delete any content deemed unfit for the Gym Sense forum.</p>
      </Container>
    </Wrapper>
    <Footer/>
    </>
  );
}

export default Forum;
