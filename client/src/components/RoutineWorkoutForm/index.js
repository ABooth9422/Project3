import React, { Component } from 'react'
import Button from '../Button'
import "./style.css"

class RoutineWorkoutForm extends Component {
 

  goBack = (event) => {
    event.preventDefault()
    this.props.prevStep()
  }

  render () {
    const { values, handleChange, handleCheckboxChange } = this.props
    const workouts = values.selectedWorkouts;

    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12'>
            <div className='row text-center justify-content-center'>
              <div className='col-1'>
                <p>Remove</p>
              </div>
              <div className='col-1'>
                <p>Info</p>
              </div>
              <div className='col-6 col-md-4'>
                <p>Workout</p>
              </div>
              <div className='col-2'>
                <p>Reps / Carbs</p>
              </div>
              <div className='col-2'>
                <p>Sets</p>
              </div>
            </div>
            {workouts &&
              workouts.map((w) => {
                return (
                  <div key={w.excercise.workout} className='row text-center justify-content-center'>
                    <div className='col-1'>
                      {/* Remove Button */}
                      <Button className='btn btn-sm btn-dark'>X</Button>
                    </div>
                    <div className='col-1'>
                      {/* Remove Button */}
                      <Button className='btn btn-sm btn-dark'>Info</Button>
                    </div>
                    <div className='col-6 col-md-4'>
                      {/* Workout Name */}
                      {w.excercise.workout}
                      <span style={{ color: 'yellow', marginLeft: '10px' }}>({w.excercise.muscleGroup})</span>
                    </div>
                    <div className='col-2'>
                      <input
                        type='number'
                        className='form-control'
                        id={`${w.excercise.workout}Reps`}
                        min='5'
                        max='100'
                        step='5'
                        value={w.excercise.muscleGroup === "Cardio" ? w.cals : w.reps}
                        style={{ width: '50%', minWidth: '4rem', margin: '0 auto' }}
                      />
                    </div>
                    <div className='col-2'>
                      {w.excercise.muscleGroup !== 'Cardio' && (
                        <input
                          type='number'
                          className='form-control'
                          id={`${w.excercise.workout}Sets`}
                          min='1'
                          max='10'
                          val={w.sets}
                          style={{ width: '50%', minWidth: '4rem', margin: '0 auto' }}
                        />
                      )}
                    </div>
                  </div>
                )
              })}
          </div>

          <div className='col-12'>
            <Button clickHandle={this.goBack}>Go Back</Button>
            <Button clickHandle={this.props.submit}>Finished</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default RoutineWorkoutForm
