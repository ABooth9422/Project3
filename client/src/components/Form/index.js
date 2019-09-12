import React from 'react'
import './style.css'

function Form(props){

    return (
        <form>
            {props.children}
        </form>
    )
}

export default Form;