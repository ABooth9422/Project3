import React,{Component} from 'react'
import './style.css'

class TextAreaInput extends Component{

    state={
        errorArea:true
    }

    areaInput=(event)=>{
        this.props.changeHandle(event)
        if(event.target.value.trim().length>=1){
            console.log(this.state.errorArea)
            this.setState({errorArea:false})    
        }else{
            this.setState({errorArea:true})
            console.log(this.state.errorArea)
        }


    }

    render(){
        console.log(this.state.errorArea)
    return (
        <div className="form-group">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <textarea onChange={this.areaInput} className={this.state.errorArea?"error form-control":"form-control"} name="message" size="35" id={this.props.id}
            rows="6" cols="40" placeholder={this.props.placeholder} value={this.props.children}>
        </textarea>             
        </div>
    )
    }
}

export default TextAreaInput;