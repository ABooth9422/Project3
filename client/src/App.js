import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import Home from './pages/Home'
import NoMatch from './pages/NoMatch'
import Forums from './pages/Forums'
import Gyms from './pages/Gyms'
import Profile from './pages/Profile'
import Routines from './pages/Routines'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import API from './utils/API'
import './App.css'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      user: null,
      profile: null,
      profileUsernameInput: null,
      profileImageInput: null,
      profileExcerciseInput: null,
      profileSig: null

    }
  }

  logInSuccess = (response) => {
    this.setState({ user: response.profileObj })
    this.setProfile(response.profileObj.googleId)
  }

  logInFailed = (response) => {}


  logOut = () => {
    this.setState({ user: null, profile: null })
  }

  setProfile (id) {
    API.getUser(id).then((response) => {
      if (response.data) this.setState({ profile: response.data })
    })
  }

  getProfile = (cb = (res) => console.log(res)) => {
    API.getUser(this.state.user.googleId)
      .then((response) => {
        this.setState({ profile: response.data })
        cb(response.data)
      })
      .catch((err) => {
        console.log(err)
        cb(null)
      })
  }
  

  profileUsernameInputChange = (event) => {
    console.log(event.target.value.length)

    if(event.target.value.length>=1){
      this.setState({ profileUsernameInput: event.target.value,errorName:false })
    }
  }
  profileImageInputChange = (event) => {
    if(event.target.value.length>=1){
    this.setState({ profileImageInput: event.target.value,errorImage:false })
    }
  }
  profileExcerciseInputChange = (event) => {
    if(event.target.value.length>=1){
    this.setState({ profileExcerciseInput: event.target.value,errorExcerciseInput:false })
    }

  }
  profileSigChange = (event) => {
    
    this.setState({ profileSig: event.target.value })
    
  }


  submitProfile = (event, cb) => {
    event.preventDefault()
    const profileObj = {
      googleId: this.state.user.googleId,
      name: this.state.profileUsernameInput,
      email: this.state.user.email,
      img: this.state.profileImageInput,
      favWorkout: this.state.profileExcerciseInput,
      signature: this.state.profileSig 
    }

    API.createProfile(profileObj)
      .then((response) => {
        this.setState({ profile: response.data })
        cb(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render () {
    let button
    let routes
    if (!this.state.user) {
      button = (
        <GoogleLogin
          clientId='21724966650-6sae44jffah2o9mrni7lrhgjq3vh39vm.apps.googleusercontent.com'
          buttonText='Login'
          onSuccess={this.logInSuccess}
          onFailure={this.loginFailed}
          cookiePolicy={'single_host_origin'}
        />
      )
    } else {
      button = (
        <>
          <GoogleLogout
            clientId='658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com'
            buttonText='Logout'
            onLogoutSuccess={this.logOut}
          />
          <Link to='/profile'>
            <img
              className='rounded-circle ml-3'
              width='50px'
              height='50px'
              alt='logon'
              src={this.state.user.imageUrl}
            />
          </Link>
        </>
      )
    }
  

    if (!this.state.user) {
      routes = (
        <Switch>
          <Route exact path='/' render={(props) => <Home {...props} home={'home'} />} />
          <Route exact path='/home' render={(props) => <Home {...props} home={'home'} />} />
          <Route component={NoMatch} />
        </Switch>
      )
    } else if (!this.state.profile) {
      routes = (
        <Switch>
          <Route exact path='/' render={(props) => <Home {...props} home={'home'} />} />
          <Route exact path='/home' render={(props) => <Home {...props} home={'home'} />} />
          <Route
            exact
            path='/profile'
            render={(props) => (
              <Profile
                clicked
                user={this.state.user}
                profile={this.state.profile}
                getProfile={this.getProfile}
                usernameChange={this.profileUsernameInputChange}
                imageChange={this.profileImageInputChange}
                excerciseChange={this.profileExcerciseInputChange}
                profileSubmit={this.submitProfile}
                sigSelect={this.profileSigChange}
                errorName={this.errorName}
                errorImage={this.errorImage}
                errorExcerciseInput={this.errorExcerciseInput}
              />
            )}
          />
          <Route component={NoMatch} />
        </Switch>
      )
    } else {
      routes = (
        <Switch>
          <Route
            exact
            path='/'
            render={(props) => (
              <Home {...props} home={'home'} profile={this.state.profile} getProfile={this.getProfile} />
            )}
          />
          <Route
            exact
            path='/home'
            render={(props) => (
              <Home {...props} home={'home'} profile={this.state.profile} getProfile={this.getProfile} />
            )}
          />
          <Route
            exact
            path='/gyms'
            render={(props) => (
              <Gyms {...props} findagym={'findgym'} profile={this.state.profile} getProfile={this.getProfile} />
            )}
          />
          <Route
            exact
            path='/routines'
            render={(props) => (
              <Routines {...props} myRoutines={'routines'} profile={this.state.profile} getProfile={this.getProfile} />
            )}
          />
          <Route
            exact
            path='/forums'
            render={(props) => (
              <Forums {...props} visitForums={'forums'} profile={this.state.profile} getProfile={this.getProfile} />
            )}
          />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/about' component={About} />
          <Route
            exact
            path='/profile'
            render={(props) => (
              <Profile
                {...props}
                clicked={'clicked'}
                user={this.state.user}
                profile={this.state.profile}
                getProfile={this.getProfile}
              />
            )}
          />
          <Route component={NoMatch} />
        </Switch>
      )
    }

    return (
      <Router>
        <Navbar signedIn={!!this.state.user} hasProfile={!!this.state.profile}>
          {button}
        </Navbar>
        {routes}
        <Footer />
      </Router>
    )
  }
}

export default App
