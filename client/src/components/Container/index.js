import React from 'react'
import './style.css'

function Container(props) {
    return (
        
    <div className="container myContainer rounded" {...props}>
        {props.children}
    </div>
        
    )
}

export default Container;