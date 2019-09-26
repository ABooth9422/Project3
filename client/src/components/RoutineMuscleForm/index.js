import React, { Component } from 'react'
import Button from '../Button'
import "./style.css"
class RoutineMuscleForm extends Component {
  continue = (event) => {
    event.preventDefault()
    this.props.nextStep()
  }

  render () {
    const { values, handleChange, handleCheckboxChange, muscles } = this.props

    return (
      <div className='p-5 black mx-5'>
           <div className="row justify-content-center">
          <h2 className="display-1 underline">Step One</h2>
          </div>
         <div className="row justify-content-center">
          <h3 >Select the musclegroup you want to focus on</h3>
          </div>
         
        <div className='row mt-5'>
        
          <div className='col-12'>
            {muscles.map((muscle) => {
              return (
                <div key={muscle} className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    style={{"width":"30px","height":"30px"}}
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
            </div>
            <div className='container mt-5'>
              
                <div className='form-group row justify-content-center font-weight-bold'>
                  <label style={{"fontSize":"20px"}}className="mx-2">Workouts per Muscle Group:</label>
                  <input
                    type='number'
                    className='form-control grey'
                    id='numberOfWorkouts'
                    min='1'
                    max='5'
                    style={{"width":"fit-content"}}
                    value={values.numberOfWorkouts}
                    onChange={handleChange('numberOfWorkouts')}
                  />
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
