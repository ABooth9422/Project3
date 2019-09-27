import React, { Component } from 'react'
import Button from '../Button'
import './style.css'

class RoutineWorkoutForm extends Component {
  goBack = (event) => {
    event.preventDefault()
    this.props.prevStep()
  }

  render () {
    const { values, handleChange, handleCheckboxChange } = this.props
    const workouts = values.selectedWorkouts

    return (
      <>
        <div className='tableWrap mx-5 p-5'>
          <table style={{ boxShadow: 'black 3px 3px 3px' }} className='table table-dark rounded table-striped'>
            <thead>
              <tr>
                <th scope='col-5 underline'>Workout</th>
                <th scope='col-3 underline'>Reps/Carbs</th>
                <th scope='col-3 underline'>Sets</th>
                <th scope='col-1 underline' />
              </tr>
            </thead>
            <tbody>
              {workouts &&
                workouts.map((w, index) => {
                  return (
                    <tr>
                      <td>
                        <i
                          style={{ color: '#167F8F' }}
                          onClick={() => this.props.infoHandle(w.excercise.videoLink)}
                          className='fa fa-info-circle mx-2'
                        />
                        {w.excercise.workout}
                        <span style={{ color: '#D52323', marginLeft: '10px' }}>({w.excercise.muscleGroup})</span>
                      </td>
                      <td>
                        <input
                          type='number'
                          className='form-control'
                          id={`${w.excercise.workout}Reps`}
                          min='5'
                          max='100'
                          step='5'
                          value={w.excercise.muscleGroup === 'Cardio' ? w.cals : w.reps}
                          style={{ width: '50%', minWidth: '4rem', margin: '0 auto' }}
                        />
                      </td>
                      <td>
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
                      </td>
                      <td>
                        <Button className='btn btn-lg btn-danger'>
                          <i className='fa fa-trash' />
                        </Button>
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </div>
        <div className='col-12'>
          <Button clickHandle={this.goBack}>Go Back</Button>
          <Button clickHandle={this.props.submit}>Finished</Button>
        </div>
      </>
    )
  }
}

export default RoutineWorkoutForm
