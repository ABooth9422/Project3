import React, { Component } from 'react'
import Button from '../Button'

class RoutineMuscleForm extends Component {
  continue = (event) => {
    event.preventDefault()
    this.props.nextStep()
  }

  render () {
    const { values, handleChange, handleCheckboxChange, muscles } = this.props

    return (
      <div className='container'>
        <div className='row justify-content-center my-3'>
          <div className='col-12'>
            {muscles.map((muscle) => {
              return (
                <div key={muscle} className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    id={muscle}
                    checked={values.selectedMuscles[muscle]}
                    onChange={handleCheckboxChange(muscle)}
                  />
                  <label className='form-check-label' htmlFor={muscle}>
                    {muscle}
                  </label>
                </div>
              )
            })}
            <div className='row justify-content-center my-3'>
              <div className='col-3'>
                <div className='form-group'>
                  <label htmlFor='email'>Workouts per Muscle Group:</label>
                  <input
                    type='number'
                    className='form-control'
                    id='numberOfWorkouts'
                    min='1'
                    max='5'
                    value={values.numberOfWorkouts}
                    onChange={handleChange('numberOfWorkouts')}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='col-12'>
            <Button clickHandle={this.continue}>Next</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default RoutineMuscleForm
