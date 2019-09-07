import React from "react";
import Container from "../../components/Container";
import Jumbotron from "../../components/Jumbotron";
import Wrapper from "../../components/Wrapper"
import Footer from "../../components/Footer"
import "./style.css"


function Contact(){
    return(
        <>
        <Wrapper>
        <Jumbotron/>
          <Container>
          <div className="page mx-5 my-5">
          <div className="ml-5 mr-5 mt-3 text-white" id="contact">
            
            <h1 style={{"textDecoration":"underline","padding":"0"}}className="font-weight-bold display-1">Contact</h1>
            <p className="my-5 text-center">Feel free to drop us a line and we'll get back to you!</p>
            <form action="https://formspree.io/abooth9422@gmail.com" method="POST">
                <div className="d-flex justify-content-center">
                    <div className="form-group row">
                        <label  className="col-md-2 col-form-label">Name</label>
                        <div className="col-md-10">
                            <input type="text" name="name" className="form-control" size="35" id="exampleFormControlInput1"
                                placeholder="Your Name"/>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="form-group row">
                        <label  className="col-md-2 col-form-label">Email</label>
                        <div className="col-md-10">
                            <input type="email" name="email" className="form-control" size="35"
                                id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="form-group row">
                        <label>Message</label>

                        <textarea className="form-control" name="message" size="35" id="exampleFormControlTextarea1"
                            rows="6" cols="40"></textarea>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button value="Send" className="btn btn-lg btn-secondary mb-2">Submit</button>
                </div>
            </form>
        </div>
        </div>
          </Container>
        </Wrapper>
        <Footer/>
        </>
    )
}

export default Contact;