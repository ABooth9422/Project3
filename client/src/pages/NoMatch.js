import React from "react";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";

function NoMatch() {
  return (
    <Container>
      <div className='row mt-5'>
        <div className='cool-md-12'>
          
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          
        </div>
      </div>
    </Container>
  );
}

export default NoMatch;
