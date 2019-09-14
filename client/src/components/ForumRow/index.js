import React from 'react'
import './style.css'

function ForumRow(props){

    return (
        <>
        <div className="bg-secondary rounded p-5 my-2 mx-5">
        <div className="row">
        <h1 className="display-2">{props.title}</h1>
        </div>
        <div className="row">
        <h3>Created by:{props.user}</h3>
        
        </div>
        <div id="iconRow"className="row d-flex">
        <button onClick={()=>props.article(props.id)}className="btn btn-dark mx-2">Go To Post</button>
        <i id="comment" className="fa fa-comment mx-2">{props.comments || "1"}</i>
        <i id="likes"className="fa fa-thumbs-up">{props.likes}</i>
        </div>
       
        </div>
        </>
    )
}

export default ForumRow;