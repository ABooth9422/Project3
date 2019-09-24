import React from 'react'
import './style.css'

function CommentCard(props){

    return (
        <>

        <div className={`${props.authorProfile.signature} rounded my-5 mx-5 p-5`}>
        <div className="row mb-3">
        <div className="col-6 text-left">
        <h5 className="display-4"style={{"textDecoration":"underline"}}>{props.authorProfile.name}</h5>
        <h3 >Commented:</h3>
        </div>
        <div className="col-6 text-right">
        <img className="rounded-circle"src={props.authorProfile.img} alt="Forum profile" height="100px" width="100px"/>  
        </div>
        </div>
        <div className="commentCont rounded p-5 row">
        <p className="text-left" style={{"fontSize":"20px"}}>{props.comment}</p>
        </div>
        </div>
        </>
    )
}

export default CommentCard;