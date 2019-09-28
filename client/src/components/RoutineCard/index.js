import React from 'react'
import './style.css'
import Routine from '../../pages/Routines'

function RoutineCard (props) {
  return (
    <>
      <div className='card black text-white p-2 col-md-10 col-12'>
        <div className='card-body'>
          <h3 style={{"textDecoration":"underline"}}className='card-title mb-3'>Heres your workout!</h3>
          <h5 class="card-subtitle mb-2 text-muted">Don't forget to check off your progress</h5>
          <hr />
          {props.routine &&
            props.routine.map((r, index) => {
              return (
                <div key={`${r.excercise.workout}${index}`} className='row justify-content-center my-2'>
                  <div className='col-4 text-left'>
                    <i
                      style={{ color: '#167F8F' }}
                      onClick={() => props.infoHandle(r.excercise.videoLink)}
                      className='fa fa-info-circle mx-2'
                    />
                    {r.excercise.workout}
                  </div>
                  <div className='col-2'>
                    {r.excercise.muscleGroup === 'Cardio' ? `${r.cals} Cals` : `${r.reps} Reps`}
                  </div>
                  <div className='col-2'>{r.excercise.muscleGroup === 'Cardio' ? `` : `${r.sets} Sets`}</div>
                  <div className='col-4'>
                    <div className='form-check form-check-inline'>
                      <input
                        className='form-check-input completed'
                        type='checkbox'
                        style={{ width: '30px', height: '20px' }}
                      />
                      <label className='form-check-label'>Completed</label>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </>
  )
}

export default RoutineCard
