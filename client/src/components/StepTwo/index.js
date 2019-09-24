
import React,{Component} from 'react'

class StepTwo extends Component {
  constructor () {
    super()
    this.state = { 
      firstName: '', 
      lastName: ''
    }
    this.handleFirstNameChanged = this.handleFirstNameChanged.bind(this);
    this.handleLastNameChanged = this.handleLastNameChanged.bind(this);
  }

  handleFirstNameChanged (event) {
    this.setState({firstName: event.target.value})
  }

  handleLastNameChanged (event) {
    this.setState({lastName: event.target.value})
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 test">
            <h3>Test2</h3>
          </div>
        </div>
      </div>
    )
  }
}
export default StepTwo