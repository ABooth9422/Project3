import React, { Component } from 'react'
import Container from '../../components/Container'
import Wrapper from '../../components/Wrapper'
import Logo from '../../components/Logo'
import GymTube from '../../components/Youtube'
import API from '../../utils/API'
import RoutineForm from '../../components/RoutineForm'
import RoutineCard from '../../components/RoutineCard'
import './style.css'

class Routine extends Component {
  state = {
    info: null,
    workouts: null,
    muscleGroups: null,
    selectedRoutine: null,
  }

  componentDidMount () {
    API.getWorkouts().then((res) => {
      this.setState({
        workouts: res.data,
        muscleGroups: Array.from(new Set(res.data.map((workout) => workout.muscleGroup))).sort()
      }, console.log(this.state.workouts))
    })
  }

  playVideo = (id) => {
    
    this.setState({info: id});
  }

  closeVideo = () => {
    this.setState({info: null})
  }

  setSelectedRoutine = (routine) =>{
    console.log(routine)
    this.setState({selectedRoutine: routine});
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
                <GymTube link={this.state.info} closeVideo={this.closeVideo}/>
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
            {this.state.muscleGroups && !this.state.selectedRoutine && (
              <RoutineForm submit={this.setSelectedRoutine} workouts={this.state.workouts} muscleGroups={this.state.muscleGroups} />
            )}
            <div className="row mx-5 justify-content-center my-5">
              {this.state.selectedRoutine && (
                <RoutineCard infoHandle={this.playVideo} routine={this.state.selectedRoutine}/> 
              )}
            
            </div>
            
          </Container>
        </Wrapper>
      </>
    )
  }
}

export default Routine
