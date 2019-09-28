import React, { Component } from 'react'
import Button from '../Button'
import './style.css'

class RoutineWorkoutForm extends Component {
  goBack = (event) => {
    event.preventDefault()
    this.props.prevStep()
  }

  render () {
    const { values } = this.props
    const workouts = values.selectedWorkouts

    return (
      <>
       
          <div className="row justify-content-center p-5">
          <div className='col-12 tableWrap black p-5'>
          <table style={{ boxShadow: 'black 3px 3px 3px' }} className='table table-dark rounded table-striped'>
            <thead>
              <tr>
                <th className="underline"scope='col-5'>Workout</th>
                <th className="underline"scope='col-3'>Reps/Cals</th>
                <th className="underline"scope='col-3'>Sets</th>
                <th scope='col-1' />
              </tr>
            </thead>
            <tbody>
              {workouts &&
                workouts.map((w, index) => {
                  return (
                    <tr key={`workout${index}`}>
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
                          onChange={this.props.changeReps(index)}
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
                            value={w.sets}
                            onChange={this.props.changeSets(index)}
                            style={{ width: '50%', minWidth: '4rem', margin: '0 auto' }}
                          />
                        )}
                      </td>
                      <td>
                        <Button className='btn btn-dark my-0 myButton' clickHandle={() => this.props.removeWorkout(index)}>
                          <i className='fa fa-trash' />
                        </Button>
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        
        <div className='row justify-content-center'>
          <div className='form-group' style={{ width: 'fit-content' }}>
            <div className="row">
            <select
              className='form-control grey m-2'
              id='addWorkout'
              onChange={this.props.addWorkoutInputChange}
              value={values.addWorkoutInput}>
              {this.props.workouts.map((workout, index) => {
                return (
                  <option value={workout.id}>
                    {workout.workout} ({workout.muscleGroup})
                  </option>
                )
              })}
               
            </select>
            <Button clickHandle={this.props.addWorkout}>Add Workout</Button>
            </div>
          </div>
        </div>
        <div className='col-12'>
          <Button clickHandle={this.goBack}>Go Back</Button>
          <Button clickHandle={this.props.submit}>Finished</Button>
        </div>
        </div>
        </div>
        
      </>
    )
  }
}

export default RoutineWorkoutForm
