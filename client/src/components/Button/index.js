import React from 'react'
import './style.css'

function Button(props){

    return (
        <button type={props.type} className={`btn btn-${props.bootType || 'primary'}`}>
            {props.children}
        </button>
    )
}

export default Button;