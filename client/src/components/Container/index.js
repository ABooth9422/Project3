import React from 'react'
import './style.css'

function Container(props) {
    return (
        
    <div className="container myContainer rounded my-3 text-center pb-5" {...props}>
        {props.children}
    </div>
        
    )
}

export default Container;