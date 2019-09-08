import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {GoogleLogin, GoogleLogout} from 'react-google-login'

import Home from './pages/Home'
import NoMatch from './pages/NoMatch'
import Forums from './pages/Forums'
import Gyms from './pages/Gyms'
import Profile from './pages/Profile'
import Routines from './pages/Routines'
import Navbar from "./components/Navbar";
import About from "./pages/About"
import Contact from "./pages/Contact"

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
  
  // getLocation() {
  //   navigator.geolocation.getCurrentPosition(this.showPosition);
  // }
  // showPosition = (position)=>{
  //   this.setState({location: position})
  //   console.log(this.state.location)
  // }
  // componentDidMount(){
  //   this.getLocation()
  // } 

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
    if(this.isObjEmpty(this.state.user)){
      console.log(this.state.user)
      button = <GoogleLogin
      clientId="21724966650-6sae44jffah2o9mrni7lrhgjq3vh39vm.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={this.logInSuccess}
      onFailure={this.loginFailed}
      cookiePolicy={'single_host_origin'}
    />
    }else{
      console.log(this.state.user)
      button = <><GoogleLogout
      clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={this.logOut}
      /><Link to="/viewProfile"><img className="rounded-circle ml-3"width="50px"height="50px"alt="logon"src={this.state.user.imageUrl}/></Link></>
    }


    return (
      <Router>
         <Navbar auth={this.isObjEmpty(this.state.user)}>
            {button}
          </Navbar>
          <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/gyms" component={Gyms} />
        <Route exact path="/routines" component={Routines} />
        <Route exact path="/forums" component={Forums} />
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/profile" render={(props) => <Profile {...props} user={this.state.user} />}/>
        <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }

}

export default App;

