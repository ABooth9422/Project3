import React from 'react'
import './style.css'


function Card(props){
    return (
        <div className={`card ${props.type}`}>
            <div className="card-header">
                {props.header}
            </div>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}

export default Card;