import React from 'react'
import './style.css'

function TextAreaInput(props){

    return (
        <div className="form-group ">
        <label htmlFor={props.id}>{props.label}</label>
        <textarea onChange={props.changeHandle} className="form-control" name="message" size="35" id={props.id}
            rows="6" cols="40" value={props.children} placeholder={props.placeholder} value={props.children}>
        </textarea>             
        </div>
    )
}

export default TextAreaInput;