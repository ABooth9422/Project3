import React, { Component } from 'react'
import Button from '../Button'

class RoutineWorkoutForm extends Component {
  submit = (event) => {
    event.preventDefault()
    console.log('Done')
  }

  goBack = (event) => {
    event.preventDefault()
    this.props.prevStep()
  }

  render () {
    const { values, handleChange, handleCheckboxChange, workouts } = this.props

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
                  <div key={w.workout} className='row text-center justify-content-center'>
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
                      {w.workout}
                      <span style={{ color: 'yellow', marginLeft: '10px' }}>({w.muscleGroup})</span>
                    </div>
                    <div className='col-2'>
                      <input
                        type='number'
                        className='form-control'
                        id={`${w.workout}Reps`}
                        min='5'
                        max='100'
                        step='5'
                        defaultValue='10'
                        style={{ width: '50%', minWidth: '4rem', margin: '0 auto' }}
                      />
                    </div>
                    <div className='col-2'>
                      {w.muscleGroup !== 'Cardio' && (
                        <input
                          type='number'
                          className='form-control'
                          id={`${w.workout}Sets`}
                          min='1'
                          max='10'
                          defaultValue='3'
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
            <Button clickHandle={this.submit}>Finished</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default RoutineWorkoutForm
