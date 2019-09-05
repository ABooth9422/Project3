import React from "react";
import Container from "../../components/Container";
import Jumbotron from "../../components/Jumbotron";
import "./style.css"

function NoMatch() {
  return (
    <Container>
      <div id="noMatch"className='row mt-5'>
        <div className='col-md-12'>
          
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
