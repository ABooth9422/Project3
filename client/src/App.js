import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {GoogleLogin, GoogleLogout} from 'react-google-login'
import Home from "./pages/Home/index"
import NoMatch from "./pages/NoMatch/index";

import LogIn from "./pages/LogIn/index"
import Navbar from "./components/Navbar";

class App extends React.Component {
  
  constructor(){
    super()

    this.state={
      user: {},
      location:[]
    }

    this.logInSuccess = this.logInSuccess.bind(this);
    this.logInFailed = this.logInFailed.bind(this);
    this.logOut = this.logOut.bind(this);
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

  logInSuccess(response){
      this.setState({user : response.profileObj}, ()=>{
        console.log(this.state.user);
      })
  }

  logInFailed(){

  }

  logOut(){
    this.setState({user : {}}, ()=>{
      console.log(this.state.user);
    })
  }

  isObjEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }

  render(){
    let button;
    let routes;
    if(this.isObjEmpty(this.state.user)){
      button = <GoogleLogin
      clientId="21724966650-6sae44jffah2o9mrni7lrhgjq3vh39vm.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={this.logInSuccess}
      onFailure={this.loginFailed}
      cookiePolicy={'single_host_origin'}
    />

    routes =  
    <Switch>
      <Route component={LogIn} />
    </Switch>
    }else{
      button = <><GoogleLogout
      clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={this.logOut}
      /><img src={this.state.user.imageUrl}/></>

      routes = 
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NoMatch} />
    </Switch>
    }


    return (
      <Router>
         <Navbar>
            {button}
          </Navbar>
          {routes}
      </Router>
    );
  }

}

export default App;

