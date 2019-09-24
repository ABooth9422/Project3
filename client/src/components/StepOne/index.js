
import React,{Component} from 'react'

class StepOne extends Component {
  constructor () {
    super()
    this.state = { 
     
        }
    }

  render () {
    return (
        <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="chest" value="chest" />
            <label className="form-check-label" for="chest">Chest</label>
            </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="legs" value="legs" />
            <label className="form-check-label" for="legs">Legs</label>
          </div>
          <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="biceps" value="biceps" />
            <label className="form-check-label" for="biceps">Biceps</label>
            </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="triceps" value="triceps" />
           <label className="form-check-label" for="triceps">Triceps</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="shoulders" value="shoulders" />
           <label className="form-check-label" for="shoulders">Shoulders</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="back" value="back" />
           <label className="form-check-label" for="back">Back</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="cardio" value="cardio" />
           <label className="form-check-label" for="cardio">Cardio</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="abs" value="abs" />
           <label className="form-check-label" for="abs">Abs</label>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-2">
        <div class="form-group">
          <label for="exampleFormControlInput1">Select the number of exercises you would like to complete.</label>
          <input type="number" class="form-control" min="1" max="5" id="workoutNumber" placeholder="" />
        </div>
        </div>
      </div>
    </div>
      
    )
  }
}

export default StepOne