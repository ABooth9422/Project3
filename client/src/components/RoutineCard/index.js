import React from 'react'
import './style.css'

function RoutineCard(props){

    return(
        <>
        <div className="card black text-white p-2 col-md-6 col-6">
        <div className="card-body">
            <h5 className="card-title mb-3">Workout Name</h5>
            <h6 className="card-subtitle mb-3 text-muted">Heres your Workout!</h6>
            <div className="row justify-content-center">
            <h6 className="mb-2"style={{"fontSize":"20px"}}>test<i style={{"color":"#167F8F"}} className="fa fa-info-circle mx-2"/>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input completed'
                    type='checkbox'
                    style={{"width":"20px","height":"15px"}}
                  />
                  <label className='form-check-label'>
                    Completed
                  </label>
                  </div>
                  </h6>
                  </div>
            
        </div>
        </div>
        </>
    )


}

export default RoutineCard