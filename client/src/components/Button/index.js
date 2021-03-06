import React from 'react'
import './style.css'

function Button (props) {
  return (
    <button type={props.type || 'button'} className={props.className||`btn btn-lg btn-dark m-2 myButton`} onClick={props.clickHandle}>
      {props.children}
    </button>
  )
}

export default Button
