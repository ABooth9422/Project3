import React from 'react'
import Container from '../../components/Container'
import Jumbotron from '../../components/Jumbotron'
import Wrapper from '../../components/Wrapper'
import GymCard from '../../components/GymCard'
import API from '../../utils/API'
import './style.css'

class Profile extends React.Component {
  state = {
    user: null,
    profile: null,
    errorName:true,
    errorImage:true,
    errorExercise:true
  }
  componentDidMount () {
    this.updateProfile()
   
  }

  removeFavoriteGym = (id) => {
    console.log(id)
    API.removeFavoriteGym(id, this.state.profile.id).then((response) => {
      this.updateProfile()
    })
  }

  updateProfile () {
    this.props.getProfile((res) => {
      this.setState({ user: this.props.user, profile: res }, () => {})
    })
  }
  test =
    (event) => {
      console.log(event.target.value)
      this.props.profileSubmit(event, (response) => {
        this.setState({ profile: response })
      })
  }
  usernameChange=(event)=>{
    if(event.target.value.trim().length>=1){
      this.setState({errorName:false})
      this.props.usernameChange(event)
    }else if(event.target.value.trim().length===0){
      this.setState({errorName:true})
    }
  }
  imageChange=(event)=>{
    if(event.target.value.trim().length>=1){
      this.setState({errorImage:false})
      this.props.imageChange(event)
    }else if(event.target.value.trim().length===0){
      this.setState({errorImage:true})
    }
 
  }
  excerciseChange=(event)=>{
    if(event.target.value.trim().length>=1){
      this.setState({errorExercise:false})
      this.props.excerciseChange(event)
    }else if(event.target.value.trim().length===0){
      this.setState({errorExercise:true})
    }
  }


  render () {
    console.log(this.state.errorName)
    let page
    if (this.state.profile) {
      page = (
        <>
          <div className='container text-white'>
            <h1 style={{ textDecoration: 'underline' }} className='display-3 font-weight-bold my-3 text-center'>
              Welcome {this.props.user.name}!
            </h1>
            <div
              className={`row ${
                this.state.profile.signature
              } rounded rounded-pill px-5 mx-5 d-flex justify-content-center`}>
              <img
                id='profilePic'
                className='rounded-circle my-3'
                src={this.state.profile.img || this.props.image}
                height='200px'
                width='200px'
                alt='main profile pic'
              />
            </div>
            <div className='row d-flex my-3 justify-content-center'>
              <h3>Username: {this.state.profile.name}</h3>
            </div>
            <div className='row d-flex my-3 justify-content-center'>
              <h3>Email: {this.state.profile.email}</h3>
            </div>
            <div className='row d-flex my-3 justify-content-center'>
              <h3>Favorite exercise: {this.state.profile.favWorkout}</h3>
            </div>
          </div>
          {this.state.profile.favGyms && this.state.profile.favGyms.length > 0 ? (
            <h1 className='display-1 font-weight-bold'>Favorite Gyms</h1>
          ) : (
            <></>
          )}
          <div className='row'>
            {this.state.profile.favGyms &&
              this.state.profile.favGyms.map((gym) => {
                return (
                  <div key={gym.id} className='col-md-4 col-12'>
                    <GymCard
                      key={gym.gymId}
                      name={gym.name}
                      img={
                        gym.img.startsWith('http')
                          ? 'https://hondafsj.com/dist/img/nophoto.jpg'
                          : `https://maps.googleapis.com/maps/api/place/photo?maxheight=300&photoreference=${
                            gym.img
                          }&key=${process.env.REACT_APP_GOOGLE_KEY}`
                      }
                      rating={gym.rating}
                      address={gym.address}
                      favClick={() => this.removeFavoriteGym(gym.gymId)}
                      favorited
                      grey
                    />
                  </div>
                )
              })}
          </div>
        </>
      )
    } else {
      page = (
        <>
          <div className='row d-flex justify-content-center'>
            <h1 className='head display-3 mb-2 rounded'> Lets make your profile!</h1>
          </div>
          <div className='row d-flex justify-content-center'>
            <h5 className='display-4'>Hello {this.props.user.name || 'there'}!</h5>
          </div>
          <form className='text-white font-weight-bold '>
            <div className='row my-3 d-flex justify-content-center'>
              <div className='col-12 col-md-6'>
                <label>User Name</label>
                <input
                  type='text'
                  id='userName'
                  className={this.state.errorName?`error form-control`:`form-control`}
                  onChange={this.usernameChange}
                  placeholder='Username'
                />
              </div>
            </div>
            <div className='row my-3 d-flex justify-content-center'>
              <div className='col-12 col-md-6'>
                <label>Image URL</label>
                <input
                  id='imageURL'
                  type='text'
                  className={this.state.errorImage?"error form-control":"form-control"}
                  onChange={this.imageChange}
                  placeholder='Profile Image Link'
                />
              </div>
            </div>
            <div className='row d-flex my-3 justify-content-center'>
              <div className='col-12 col-md-3'>
                <label>Favorite Exercise</label>
                <input
                  id='favExer'
                  type='text'
                  className={this.state.errorExercise?"error form-control":"form-control"}
                  onChange={this.excerciseChange}
                  placeholder='Favorite Movement'
                />
              </div>
            </div>

            <div className='row d-flex my-3 justify-content-center'>
              <div className='col-12'>
                <div className='image-radio mt-3'>
                  <div className='row d-flex justify-content-center'>
                    <label>Select a Signature for forum</label>
                  </div>
                  <label>
                    <input type='radio' value='blueSig' onChange={this.props.sigSelect} name='sigBtn' id='blueSig' />
                    <img
                      alt='blueSig'
                      className='rounded-circle'
                      width='100px'
                      height='100px'
                      src={require('./images/bluesig.png')}
                    />
                  </label>
                  <label>
                    {' '}
                    <input type='radio' value='manSteel' onChange={this.props.sigSelect} name='sigBtn' id='manSig' />
                    <img
                      alt='manSig'
                      className='rounded-circle'
                      width='100px'
                      height='100px'
                      src={require('./images/manSig.png')}
                    />
                  </label>
                  <label>
                    {' '}
                    <input type='radio' value='pinkSig' onChange={this.props.sigSelect} name='sigBtn' id='pinkSig' />
                    <img
                      alt='pinkSig'
                      className='rounded-circle'
                      width='100px'
                      height='100px'
                      src={require('./images/pinkSig.png')}
                    />
                  </label>
                  <label>
                    {' '}
                    <input type='radio' value='default' onChange={this.props.sigSelect} name='sigBtn' id='default' />
                    <img
                      alt='default'
                      className='rounded-circle'
                      width='100px'
                      height='100px'
                      src={require('./images/default.png')}
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className='row d-flex justify-content-center'>
              <button
                onClick={((event) => {this.test(event)
                
                })}
                className='btn btn-secondary my-3'>
                Submit
              </button>
            </div>
          </form>
        </>
      )
    }

    return (
      <>
        <Wrapper>
          <Jumbotron />
          <Container style={{ padding: '100px' }}>
            <div className='profContent rounded'>
              <div className='container my-3 p-3'>
                <div className='row d-flex justify-content-center' />
              </div>
              {page}
            </div>
          </Container>
        </Wrapper>
      </>
    )
  }
}

export default Profile
