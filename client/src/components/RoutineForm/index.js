import React, { Component } from 'react'
import RoutineMuscleForm from '../RoutineMuscleForm'
import RoutineWorkoutForm from '../RoutineWorkoutForm'

class RoutineForm extends Component {
  constructor (props) {
    super(props)

    const selectedMuscles = {}
    props.muscleGroups.forEach((muscle) => {
      selectedMuscles[muscle] = false
    })

    this.state = {
      step: 1,
      numberOfWorkouts: 1,
      selectedMuscles: selectedMuscles,
      selectedWorkouts: [],
      addWorkoutInput: 1
    }
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

  removeWorkout = (index) => {
    const newSelected = Array.from(this.state.selectedWorkouts)
    newSelected.splice(index, 1)
    this.setState({ selectedWorkouts: newSelected })
  }

  addWorkoutInputChange = (event) => {
    this.setState({ addWorkoutInput: event.target.value })
  }

  addWorkout = (event) => {
    const { selectedWorkouts, addWorkoutInput } = this.state
    const ids = selectedWorkouts.map((workout) => workout.excercise.id)
    console.log(selectedWorkouts)
    console.log(addWorkoutInput)
    console.log(ids)
    console.log(!ids.includes(addWorkoutInput))

    if (!ids.includes(addWorkoutInput)) {
      const newSelected = Array.from(selectedWorkouts)
      newSelected.push({
        excercise: this.props.workouts.find((w) => w.id == addWorkoutInput),
        reps: 10,
        sets: 3,
        cals: 25
      })

      this.setState({ selectedWorkouts: newSelected })
    }
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
      this.state.selectedWorkouts.forEach((workout) => {})
    })
  }

  changeReps = (index) => (event) => {
    const newSelected = Array.from(this.state.selectedWorkouts)
    newSelected[index].excercise.muscleGroup === 'Cardio'
      ? (newSelected[index].cals = event.target.value)
      : (newSelected[index].reps = event.target.value)

    this.setState({ selectedWorkouts: newSelected })
  }

  changeSets = (index) => (event) => {
    const newSelected = Array.from(this.state.selectedWorkouts)
    newSelected[index].sets = event.target.value
    this.setState({ selectedWorkouts: newSelected })
  }

  render () {
    const { step } = this.state
    const { selectedMuscles, selectedWorkouts, numberOfWorkouts, addWorkoutInput } = this.state
    const values = { selectedMuscles, selectedWorkouts, numberOfWorkouts, addWorkoutInput }

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
            changeReps={this.changeReps}
            changeSets={this.changeSets}
            removeWorkout={this.removeWorkout}
            workouts={this.props.workouts}
            addWorkout={this.addWorkout}
            addWorkoutInputChange={this.addWorkoutInputChange}
          />
        )

      default:
        return <h1>Default</h1>
    }
  }
}

export default RoutineForm
