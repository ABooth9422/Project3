import React from 'react'
import './style.css'

function CommentCard(props){

    return (
        <>
        <div className="cont rounded bg-secondary my-3 mx-5 p-5">
        <div className="row">
        <h5 className="display-4"style={{"textDecoration":"underline"}}>{props.user}</h5>
        </div>
        <div className="row justify-content-center">
        <p>{props.comment}</p>
        </div>
        </div>
        </>
    )
}

export default CommentCard;