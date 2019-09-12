import React from 'react'
import './style.css'

function TextInput(props){

    return (
        <div className="form-group">
            <label for={props.id}>{props.label}</label>
            <input className="form-control" id={props.id} type='text' onChange={props.changeHandle} placeholder={props.children}/>
        </div>
    )
}

export default TextInput;