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
import Footer from './components/Footer'
import './App.css'


class App extends React.Component {
  
  constructor(){
    super()

    this.state={
      user: {},
      location:[],
      profile:{}
    }

    this.logInSuccess = this.logInSuccess.bind(this);
    this.logInFailed = this.logInFailed.bind(this);
    this.logOut = this.logOut.bind(this);
    this.setProfile=this.setProfile.bind(this)
  }
  
 

  logInSuccess(response){
      this.setState({user : response.profileObj}, ()=>{
        //console.log(this.state.user);
      })
  }

  logInFailed(){
    
  }

  logOut(){
    this.setState({user : {}}, ()=>{
      //console.log(this.state.user);
    })
  }
  setProfile=(profile)=>{
    this.setState({profile:profile},()=>{
      console.log(this.state.profile)
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
      /><Link to="/profile"><img className="rounded-circle ml-3"width="50px"height="50px"alt="logon"src={this.state.user.imageUrl}/></Link></>
    }

    if(this.isObjEmpty(this.state.user)){
      routes = 
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route component={NoMatch} />
      </Switch>
      
    }else if(this.isObjEmpty(this.state.profile)){
      routes =
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} home={"home"} user={this.state.user} />}/>
        <Route exact path="/home" render={(props) => <Home {...props} home={"home"} user={this.state.user} />}/>
        <Route exact path="/profile" render={(props) => <Profile {...props} clicked={"clicked"} mainProf={this.setProfile} user={this.state.user} />}/>
        <Route component={NoMatch} />
      </Switch>
      
    }else{
      routes = 
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} home={"home"} user={this.state.user} />}/>
        <Route exact path="/home" render={(props) => <Home {...props} home={"home"} user={this.state.user} />}/>
        <Route exact path="/gyms" render={(props) => <Gyms {...props} findagym={"findgym"}user={this.state.user} />}/>
        <Route exact path="/routines" render={(props) => <Routines {...props} myRoutines={"routines"} user={this.state.user} />}/>
        <Route exact path="/forums" render={(props) => <Forums {...props} visitForums={"forums"} profile={this.state.profile} user={this.state.user} />}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/profile" render={(props) => <Profile {...props} clicked={"clicked"} mainProf={this.setProfile} user={this.state.user} />}/>
        <Route component={NoMatch} />
      </Switch>
    }


    return (
      <Router>
         <Navbar signedIn={!this.isObjEmpty(this.state.user)} hasProfile={!this.isObjEmpty(this.state.profile)}>
            {button}
        </Navbar>
        {routes}
        <Footer/>
      </Router>
      
    );
  }

}

export default App;

