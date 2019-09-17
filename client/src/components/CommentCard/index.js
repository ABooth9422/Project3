import React from 'react'
import './style.css'

function CommentCard(props){

    return (
        <>

        <div className="cont rounded my-5 mx-5 p-5">
        <div className="row">
        <div className="col-6 text-left">
        <h5 className="display-4"style={{"textDecoration":"underline"}}>{props.user}</h5>
        </div>
        <div className="col-6 text-right">
        <img className="rounded-circle"src={props.commentImg} alt="Forum profile" height="100px" width="100px"/>  
        </div>
        </div>
        <div className="row justify-content-center">
        <p>{props.comment}</p>
        </div>
        </div>
        </>
    )
}

export default CommentCard;