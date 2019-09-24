import React, {Component} from 'react'
import Button from '../Button'

class DynamicForm extends Component{
    constructor(){
        super()

        this.state = {
            currentStep: 0,
            steps: []
        }
    }

    componentDidMount(){
        this.setState({steps: this.props.steps})
    }

    goBack = () => {
        if(this.state.currentStep > 0){
            this.setState({currentStep: this.state.currentStep - 1})
        }
    }

    nextStep = () => {
        if(this.state.currentStep < this.state.steps.length){
            this.setState({currentStep: this.state.currentStep + 1})
        }
    }

    render(){
        return (
            <>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            {this.state.steps.length > 0 ? this.state.steps[this.state.currentStep].component : <></>}
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-3'>
                            {this.state.currentStep > 0 && (
                                <Button type="button" onClick={this.goBack}>Previous</Button>
                            )}
                        </div>
                        <div className='col-3'>
                        {this.state.currentStep < this.state.steps.length - 1 && (
                                <Button type="button" onClick={this.nextStep}>Next</Button>
                            )}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default DynamicForm;