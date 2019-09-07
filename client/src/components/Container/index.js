import React from 'react'
import './style.css'

function Container(props) {
    return (
        
    <div className="container rounded" {...props} style={{"backgroundColor":"#343A40"}}>
        {props.children}
    </div>
        
    )
}

export default Container;