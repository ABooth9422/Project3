import React,{Component} from 'react'
import './style.css'

class TextInput extends Component{

    state={
        errorInput:true
    }

    textInput=(event)=>{
        this.props.changeHandle(event)
        if(event.target.value.trim().length>=1){
            console.log(this.state.errorInput)
            this.setState({errorInput:false})
        }else{
            this.setState({errorInput:true})
            console.log(this.state.errorInput)
        }

    }
    componentDidMount(){
        this.setState({errorInput:true})
    }

    render(){
    return (
        <div className="form-group">
        <label className='' htmlFor={this.props.id}>{this.props.label}</label>
        <input className={this.state.errorInput?"error form-control":"form-control"} id={this.props.id} type='text' placeholder={this.props.placeholder || ''} size="35" onChange={this.textInput} value={this.props.children}/>
        </div>
    )
    }

}

export default TextInput
