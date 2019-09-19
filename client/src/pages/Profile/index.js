
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
      image:require("../Profile/test.png"),
      usernameInput:"",
      imageInput:"",
      exerciseInput:"",
      profile:{},
      length:0
      
    }

    
    componentDidMount(){
      this.setState({profile: this.props.profile || {}});
    }

 
  
  profileCreate=(event)=>{
    event.preventDefault()
    let profileObj={
      img:this.state.imageInput,
      email:this.props.user.email,
      name:this.state.usernameInput,
      googleId:this.props.user.googleId,
      favWorkout:this.state.exerciseInput
     }
  
   API.createProfile(profileObj).then((response) =>{
    this.setState({profile: response.data, submit: true})
    this.props.mainProf(response.data)
    })
    
   
  }

  userNameChange=(event)=>{
    this.setState({usernameInput: event.target.value})
  }

  imageChange=(event)=>{
    this.setState({imageInput: event.target.value})
  }

  excerciseChange=(event)=>{
    this.setState({exerciseInput: event.target.value})
  }

  isObjEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }





  render(){
    let profile
    //console.log(this.props)
    if(this.isObjEmpty(this.state.profile)){
      profile=
      <>
      
      <div className="row d-flex justify-content-center">
      <h2 className="head display-1 rounded">{this.state.heading}</h2>
      <h3>Hello {this.props.user.name || "there"}! Lets make your profile!</h3>
      </div>
     
        <form className="text-white font-weight-bold ">
      <div className="row my-3 d-flex justify-content-center">
        <div className="col-6">
          <label >User Name</label>
          <input type="text" id="userName"className="form-control" onChange={this.userNameChange} value={this.state.usernameInput} placeholder="Username"/>
          </div>
        </div>
        <div className="row my-3 d-flex justify-content-center">
          <div className="col-6">
          <label >Image URL</label>
          <input id="imageURL"type="text" className="form-control" onChange={this.imageChange} value={this.state.imageInput} placeholder="Profile Image Link"/>
          </div>
        </div>
        <div className="row d-flex my-3 justify-content-center">
          <div className="col-3">
          <label >Favorite Exercise</label>
          <input id="favExer"type="text" className="form-control" onChange={this.excerciseChange} value={this.state.exerciseInput} placeholder="Favorite Movement"/>
            </div>
        </div>
        <div className="row d-flex justify-content-center">
        <button onClick={this.profileCreate}className="btn btn-secondary my-5">Submit</button>
        </div>
        </form>
        

      </>
    }else{
      profile=
      <>
      <div className="container text-white">
      <h1 style={{"textDecoration":"underline"}}className="display-1 text-center">Welcome {this.props.profile.name}!</h1>
      <div className="row row d-flex justify-content-center">
      <img id="profilePic"className="rounded-circle my-2"src={this.props.profile.img || this.props.image} height="200px" width="200px" alt="main profile pic"></img>
      </div>
      <div className="row d-flex my-2 justify-content-center">
      <h3>Email: {this.props.profile.email}</h3>
      </div>
      <div className="row d-flex my-2 justify-content-center">
      <h3>Favorite exercise: {this.props.profile.favWorkout}</h3>

      </div>
      </div>
      </>
    }





  return (
    <>
    <Wrapper>
    <Jumbotron/>
      <Container style={{"padding":"100px"}}>
      <div className="profContent rounded">
      <div className="container my-3 p-3">
      <div className="row d-flex justify-content-center">
      </div>
      </div>
      {profile}
      </div>
   
      </Container>
    </Wrapper>
    </>
  );
}
}

export default Profile;
