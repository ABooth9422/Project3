import React from 'react'
import './style.css'

function Container(props) {
    return (
        
    <div className="container rounded bg-secondary" {...props}>
        {props.children}
    </div>
        
    )
}

export default Container;