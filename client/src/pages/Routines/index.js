import React, { Component } from 'react'
import Container from '../../components/Container'
import Wrapper from '../../components/Wrapper'
import Logo from '../../components/Logo'
import GymTube from '../../components/Youtube'
import API from '../../utils/API'
import RoutineForm from '../../components/RoutineForm'
import './style.css'

class Routine extends Component {
  state = {
    info: false,
    workouts: null,
    muscleGroups: null
  }

  componentDidMount () {
    API.getWorkouts().then((res) => {
      this.setState({
        workouts: res.data,
        muscleGroups: Array.from(new Set(res.data.map((workout) => workout.muscleGroup))).sort()
      })
    })
  }

  render () {
    return (
      <>
        <Wrapper>
          <Container>
            <header className='my-5 p-5rounded'>
              <div className='routine__bg p-5 '>
                <h1 id='routineHead' className='display-1 rounded mt-5 text-black'>
                  Build a Routine!
                </h1>
              </div>
            </header>
            <div className='mainStuff'>
              {this.state.info ? (
                <GymTube />
              ) : (
                <Logo
                  style={{ boxShadow: 'black 3px 3px 3px' }}
                  class={'bg-white gymsensei rounded'}
                  image={require('./images/GYMSENSEi.png')}
                />
              )}
            </div>
            <div className='row p-5'>
              <h3 className='text-white text-center'>
                We will help you every step of the way! Here we will help you build a routine thats custom to your
                needs. We will give you some insight of what to look for if you have no prior workout experience. If you
                have a general idea of what you want to do you can use our calendar to make your own workout schedule.
              </h3>
            </div>
            <h3 className="display-1 underline">Routine Wizard</h3>
            {this.state.muscleGroups && (
              <RoutineForm workouts={this.state.workouts} muscleGroups={this.state.muscleGroups} />
            )}
          </Container>
        </Wrapper>
      </>
    )
  }
}

export default Routine
