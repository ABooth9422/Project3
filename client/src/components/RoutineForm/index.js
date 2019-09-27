import React, { Component } from 'react'
import RoutineMuscleForm from '../RoutineMuscleForm'
import RoutineWorkoutForm from '../RoutineWorkoutForm'

class RoutineForm extends Component {
  constructor (props) {
    super(props)

    const selectedMuscles = {}
    props.muscleGroups.forEach((muscle) => {
      selectedMuscles[muscle] = false

      this.state = {
        step: 1,
        numberOfWorkouts: 1,
        selectedMuscles: selectedMuscles,
        selectedWorkouts: []
      }
    })
  }

  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1
    })
  }

  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1
    })
  }

  handleCheckboxChange = (input) => (event) => {
    let selectedMuscles = this.state.selectedMuscles
    selectedMuscles[input] = event.target.checked
    this.setState({ selectedMuscles }, this.generateWorkouts)
  }

  handleChange = (input) => (event) => {
    this.setState(
      {
        [input]: event.target.value
      },
      this.generateWorkouts
    )
  }

  generateWorkouts () {
    let selectedWorkouts = []
    const { numberOfWorkouts, selectedMuscles } = this.state
    for (const key in selectedMuscles) {
      if (selectedMuscles[key]) {
        let listOfWorkouts = this.props.workouts.filter((w) => w.muscleGroup === key)
        for (let i = 0; i < numberOfWorkouts; i++) {
          let workout = {
            excercise: null,
            reps: 10,
            sets: 3,
            cals: 25
          }

          do {
            workout.excercise = listOfWorkouts[Math.floor(Math.random() * listOfWorkouts.length)]
          } while (selectedWorkouts.map((wO) => wO.excercise.id).includes(workout.excercise.id))
          selectedWorkouts.push(workout)
        }
      }
    }
    this.setState({ selectedWorkouts }, () => {
      this.state.selectedWorkouts.forEach((workout) => {
        console.log(workout.excercise)
      })
    })
  }

  render () {
    const { step } = this.state
    const { selectedMuscles, selectedWorkouts, numberOfWorkouts } = this.state
    const values = { selectedMuscles, selectedWorkouts, numberOfWorkouts }

    switch (step) {
      case 1:
        return (
          <RoutineMuscleForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleCheckboxChange={this.handleCheckboxChange}
            handleChange={this.handleChange}
            values={values}
            muscles={this.props.muscleGroups}
          />
        )
      case 2:
        return (
          <RoutineWorkoutForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            submit={() => this.props.submit(this.state.selectedWorkouts)}
            infoHandle={this.props.infoHandle}
          />
        )

      default:
        return <h1>Default</h1>
    }
  }
}

export default RoutineForm
