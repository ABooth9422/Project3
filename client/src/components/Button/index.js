import React from 'react'
import './style.css'

function Button(props){

    return (
        <button type={props.type || 'button'} className={`btn btn-lg btn-dark m-2`}  onClick={props.clickHandle}>
            {props.children}
        </button>
    )
}

export default Button;