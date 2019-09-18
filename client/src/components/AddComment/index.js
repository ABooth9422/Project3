import React,{Component} from 'react'
import API from "../../utils/API"
import ForumRow from "../../components/ForumRow"
import CommentCard from "../../components/CommentCard"
import './style.css'

class AddComment extends Component{


    state={
        currentComment:"",
        article:[],
        id:"",
        comments:[],
        likes:0
    }
    comment=(event)=>{
        let currentComment = event.target.value
        this.setState({currentComment:currentComment})
    }
    componentDidMount(){
        this.setState({id:this.props.id})
        API.getArticle(this.props.id).then(res => {
            this.setState({article:res.data})
            this.setState({likes:res.data.likes})
            console.log(this.state.article)
            this.setState({comments:res.data.Comments})  
          })
    }
    postComment=()=>{
        const comObj={post:this.state.currentComment}
        const commentArray=this.state.comments
        comObj.user=this.props.user
        comObj.ForumId=this.state.id
        comObj.img=this.props.profileIMG
        API.createComment(comObj).then(res=>{
          commentArray.push(res.data)
           this.setState({comments:commentArray})
           console.log(res)
        })
      }
 

render(){
    
    const forum = this.state.article
    const articleComments=this.state.comments
   
    console.log(this.state.likes +"likes from comment")
    return (
        <>
        <ForumRow
        
        title={forum.post}
        user={forum.user}
        likes={this.state.likes}
        comments={"Comments" in forum ?forum.Comments.length:"1"}
        id={this.props.id}
        likeStyle={this.props.likeStyle}
        updateLike={this.props.updateLike}
        forumImage={forum.img}
        likeComment={"false"}
       
        
        />
        <h1 className="display-1 text-center">Comments</h1>
        {articleComments.map(comment=>{
            return(
               <CommentCard
                key={comment.id}
                comment={comment.post}
                user={comment.user}
                commentImg={comment.img}
               />
            )
        })}
    
        <form className="commentGroup rounded">
        <div className="d-flex justify-content-center">
        <div className="form-group row">
            <label>Comment</label>
            <textarea onChange={this.comment} className="form-control" name="message" size="35" id="firstComment"
                rows="6" cols="40"></textarea>
        </div>
        </div>
        <div className="d-flex justify-content-center">
        <button type="button"onClick={this.postComment} className="btn btn-lg btn-dark mb-2">Submit</button>
        <button type="button"onClick={this.props.back}className="btn btn-lg btn-dark mx-2 mb-2">Go Back</button>
    </div>
    </form>
    </>
    )
}
}

export default AddComment;