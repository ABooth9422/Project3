import React from 'react'
import './style.css'

function TextInput(props){

    return (
        <div className="form-group">
            <label htmlFor={props.id}>{props.label}</label>
            <input className="form-control" id={props.id} type='text' onChange={props.changeHandle} value={props.children}/>
        </div>
    )
}

export default TextInput;