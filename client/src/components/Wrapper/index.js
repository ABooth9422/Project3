import React from 'react'
import './style.css'

function Wrapper(props) {
    return (
        
    <div className="wrapper bg-secondary" {...props}>
        {props.children}
    </div>
        
    )
}

export default Wrapper;