import React from 'react'
import './style.css'

function TextInput(props){

    return (
        <div className="form-group ">
        <label className='' htmlFor={props.id}>{props.label}</label>
        <input className="form-control" id={props.id} type='text' placeholder={props.placeholder || ''} size="35" onChange={props.changeHandle} value={props.children}/>
        </div>
    )
}

export default TextInput;