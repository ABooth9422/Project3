import React from 'react'
import Button from '../Button'
import './style.css'
import CommentCard from '../CommentCard';

function ForumTopic(props) {

    const comments = props.comments.map(comment => <CommentCard key={comment.id} authorProfile={comment.User} comment={comment.post}/>);


    return (
        <>
       
        <div className="forumBG rounded p-3 px-5 my-3 mx-5">
        <div className="row">
        <div className="col-6">
        <h1 className="bgTitle text-left">{props.title}</h1>
        <h3 className="text-left">Created by: {props.authorProfile.name || 'No Name'}</h3>
        {!props.open && (
                <div className="row justify-content-start">
                <Button type='button' clickHandle={props.goToPost}>Go To Post</Button>
                </div>
        )}
        </div>
        <div className="col-6 text-right">
        <img className="rounded-circle"src={props.authorProfile.img || ''} alt="Forum profile" height="100px" width="100px"/>
        <div className="row text-right justify-content-end">
        <i id="comment" className="fa fa-comment mx-2">{props.comments.length || "1"}</i>
        <i id={props.id} onClick={props.clickLikeHandle} className={props.hasLiked ? 'fa fa-thumbs-up likes mr-3':'fa fa-thumbs-up mr-3'}style={{"fontSize":"24px"}}>{props.likes}</i>
        </div>
        </div>
        </div>
            {props.open && (
                <>
                <div className="row">
                    <div className='col-12 topicPost rounded p-5'>
                        <p className="text-left" style={{"fontSize":"20px"}}>{props.post}</p>
                    </div>
                </div>
                </>
            )}
            
        </div>

        {props.showComments && (
            comments
        )}

        </>
    )
}

export default ForumTopic;