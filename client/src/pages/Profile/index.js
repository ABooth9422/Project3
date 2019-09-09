
import React from "react";
import Container from "../../components/Container";
import Jumbotron from "../../components/Jumbotron";
import Wrapper from "../../components/Wrapper"
import Footer from "../../components/Footer"
import "./style.css"
import API from "../../utils/API"


class Profile extends React.Component {
  
    state={
      heading:"Create Profile",
      submit:false,
      profile:require("../Profile/test.png"),
      username:"Blank",
      email:"Blank",
      movement:"Blank"
    }
  
  profileCreate=(event)=>{
    event.preventDefault()
    this.setState({submit:true,heading:"View Profile"})
    let image =document.getElementById("imageURL").value
    this.setState({profile:image})
    let UserName=document.getElementById("userName").value
    this.setState({username:UserName})
    let fav=document.getElementById("favExer").value
    this.setState({movement:fav})
    let email=document.getElementById("email").value
    this.setState({email:email})
     
    
    let profileObj={
      img:image,
      email:this.props.user.email,
      name:UserName,
      googleid:this.props.user.googleId
     }
  
   API.createComment(profileObj).then(function(resp){
      console.log(resp)
    })
  }




  render(props){
    let profile
    console.log(this.props)
    if(!this.state.submit){
      profile=
      <>
      <div className="row d-flex justify-content-center">
      <h3>Hello {this.props.user.name}! Lets make your profile!</h3>
      </div>
     
        <form className="text-white font-weight-bold ">
      <div className="row my-3 d-flex justify-content-center">
        <div className="col-6">
          <label >User Name</label>
          <input type="text" id="userName"className="form-control" placeholder="Username"/>
          </div>
        </div>
        <div className="row my-3 d-flex justify-content-center">
          <div className="col-6">
          <label >Image URL</label>
          <input id="imageURL"type="text" className="form-control" placeholder="Profile Image Link"/>
          </div>
        </div>
        <div className="row d-flex my-3 justify-content-center">
          <div className="col-3">
          <label >Email</label>
          <input id="email"type="email" className="form-control" placeholder="Email"/>
          </div>
          <div className="col-3">
          <label >Favorite Exercise</label>
          <input id="favExer"type="text" className="form-control" placeholder="Favorite Movement"/>
            </div>
        </div>
        <div className="row d-flex justify-content-center">
        <button  onClick={this.profileCreate}className="btn btn-secondary my-5">Submit</button>
        </div>
        </form>
      </>
    }else{
      profile=
      <>
      <div className="container text-white">
      <h1 style={{"textDecoration":"underline"}}className="display-1 text-center">Welcome {this.state.username}</h1>
      <div className="row row d-flex justify-content-center">
      <img id="profilePic"className="rounded-circle my-2"src={this.state.profile} height="200px" width="200px" alt="main profile pic"></img>
      </div>
      <div className="row d-flex my-2 justify-content-center">
      <h3>Your Email is: {this.state.email}</h3>
      </div>
      <div className="row d-flex my-2 justify-content-center">
      <h3>Favorite exercise: {this.state.movement}</h3>
      </div>
      </div>
      </>
    }





  return (
    <>
    <Wrapper>
    <Jumbotron/>
      <Container>
      
      <div className="container my-3 p-3">
      <div className="row d-flex justify-content-center">
      <h2 className="head display-1 rounded">{this.state.heading}</h2> 
      
      </div>
      
      </div>
      
      {profile}
      
    


      </Container>
    </Wrapper>
    <Footer/>
    </>
  );
}
}

export default Profile;
