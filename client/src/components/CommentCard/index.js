import React from 'react'
import './style.css'

function CommentCard(props){

    return (
        <>
        <div className={`${props.authorProfile.signature} rounded my-3 px-5 mx-5 p-3`}>
            <div className="row mb-3">
                <div className="col-10 text-left">
                    <h4 style={{"textDecoration":"underline"}}>{props.authorProfile.name}</h4>
                    <h5>{props.authorProfile.createdAt}</h5>
                    <h5 >Commented:</h5>
                </div>
                <div className="col-2 text-right">
                    <img className="rounded-circle"src={props.authorProfile.img} alt="Forum profile" height="100px" width="100px"/>  
                </div>
            </div>
            <div className="row p-3">
                <div className="col-12 commentCont rounded p-2">
                    <p className="text-left" style={{"fontSize":"20px"}}>{props.comment}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default CommentCard;