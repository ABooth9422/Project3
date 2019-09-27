import React, { Component } from 'react'
import Container from '../../components/Container'
import Jumbotron from '../../components/Jumbotron'
import Wrapper from '../../components/Wrapper'
import GymCard from '../../components/GymCard'
import Form from '../../components/Form'
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'
import './style.css'
import API from '../../utils/API'

class Gyms extends Component {
  constructor () {
    super()

    this.state = {
      WrappedMap: null,
      selectedGym: null,
      query: '',
      center: { lat: 35.779591, lng: -78.638176 },
      gyms: [],
      favoriteGyms: []
    }
  }

  componentDidMount () {
    if (!this.state.WrappedMap) {
      this.initMap()
    }

    this.updateFavorites()
  }
  getLocation = () => {
    navigator.geolocation.getCurrentPosition(this.showPosition)
  }

  showPosition = (position) => {
    this.setState({ location: position })
    console.log(this.state.location)
  }

  useLocation = () => {
    if (!this.state.disabled) {
      this.setState({ disabled: true })
    } else {
      this.setState({ disabled: false })
    }
  }

  formSubmit = () => {
    if (this.state.query) {
      console.log(this.state.query)
      API.getGymsWithoutLocation(this.state.query)
        .then((res) => {
          this.setState({
            center: res.data.center,
            gyms: res.data.gyms,
            WrappedMap: withScriptjs(withGoogleMap(this.Map)),
            selectedGym: null
          })
          console.log(this.state)
        })
        .catch((err) => {
          console.log(err.response)
        })
    }
  }

  inputChange = (event) => {
    this.setState({
      query: event.target.value,
      renderMap: false
    })
  }

  selectGym (gym) {
    console.log(gym)
    this.setState({ selectedGym: gym })
    if ('photos' in gym) {
      API.getGymPhoto(gym.photos[0].photo_reference).then((response) => {})
    }
  }

  Map = () => {
    return (
      <GoogleMap defaultZoom={10} defaultCenter={this.state.center}>
        {this.state.gyms.map((gym) => (
          <Marker
            key={gym.id}
            position={gym.geometry.location}
            onClick={() => {
              this.selectGym(gym)
            }}
            icon={{
              url: require('./images/marker.png'),
              scaledSize: new window.google.maps.Size(50, 50)
            }}
          />
        ))}
      </GoogleMap>
    )
  }
  initMap = () => {
    this.setState({ WrappedMap: withScriptjs(withGoogleMap(this.Map)) })
  }

  toggleFavoriteGym = () => {
    if (this.state.favoriteGyms.includes(this.state.selectedGym.id)) {
      API.removeFavoriteGym(this.state.selectedGym.id, this.props.profile.id).then((response) => {
        this.updateFavorites()
      })
    } else {
      const sGym = this.state.selectedGym
      const gymObj = {
        gymId: sGym.id,
        name: sGym.name,
        address: sGym.vicinity,
        rating: sGym.rating,
        img: 'photos' in sGym ? sGym.photos[0].photo_reference : 'https://hondafsj.com/dist/img/nophoto.jpg',
        UserId: this.props.profile.id
      }

      console.log(gymObj)

      API.addFavoriteGym(gymObj).then((response) => {
        this.updateFavorites()
      })
    }
  }

  updateFavorites () {
    this.props.getProfile((res) => {
      this.setState({ favoriteGyms: res.favGyms.map((gym) => gym.gymId) })
    })
  }

  render () {
    let WrappedMap = this.state.WrappedMap || withScriptjs(withGoogleMap(this.Map))

    return (
      <>
        <Wrapper>
          <Jumbotron />
          <Container>
            <header className='my-1 p-5rounded'>
              <div className='gym__bg p-5 ' />
              <h1 id='gymHead' className='display-1 rounded mt-5 text-black'>
                Find your gym!
              </h1>
            </header>
            <div style={{ boxShadow: 'black 3px 3px 3px' }} className='contain rounded mx-5 p-5'>
              <div className='row d-flex justify-content-center text-center' />
              <div className='row d-flex my-3  justify-content-center text-center'>
                <h3>
                  Our desire is to help you find a gym in your area and be a resource for starting your workout
                  routines. Enter your address or zip code below to find a gym to FIT you needs!
                </h3>
              </div>

              <div className='row justify-content-center'>
                <Form>
                  <TextInput id='gymSearch' placeholder={'Enter Address'} changeHandle={this.inputChange}>
                    {this.state.query}
                  </TextInput>
                  <Button type='button' clickHandle={this.formSubmit}>
                    GO
                  </Button>
                </Form>
              </div>
            </div>
            <div className='row text-center mx-2 my-5 justify-content-center'>
              <div className='col-12 col-md-6 my-3 rounded mapContainer'>
                <WrappedMap
                  googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
                    process.env.REACT_APP_GOOGLE_KEY
                  }`}
                  loadingElement={<div style={{ height: '100%' }} />}
                  containerElement={<div style={{ height: '100%', maxHeight: '500px' }} />}
                  mapElement={<div style={{ height: '100%' }} />}
                />
              </div>
              {this.state.selectedGym ? (
                <div className='col-12 col-md-6 my-3'>
                  {this.state.selectedGym && (
                    <GymCard
                      id={this.state.selectedGym.id}
                      name={this.state.selectedGym.name}
                      favClick={this.toggleFavoriteGym}
                      address={this.state.selectedGym.vicinity}
                      rating={this.state.selectedGym.rating}
                      favorited={this.state.favoriteGyms.includes(this.state.selectedGym.id)}
                      img={
                        'photos' in this.state.selectedGym
                          ? `https://maps.googleapis.com/maps/api/place/photo?maxheight=300&photoreference=${
                            this.state.selectedGym.photos[0].photo_reference
                          }&key=${process.env.REACT_APP_GOOGLE_KEY}`
                          : 'https://hondafsj.com/dist/img/nophoto.jpg'
                      }
                    />
                  )}
                </div>
              ) : (
                <></>
              )}
            </div>
          </Container>
        </Wrapper>
      </>
    )
  }
}

export default Gyms
