import React from 'react'
import './style.css'

function Button(props){

    return (
        <button type={props.type} className={`btn btn-${props.bootType || 'primary'}`}  onClick={props.clickHandle}>
            {props.children}
        </button>
    )
}

export default Button;