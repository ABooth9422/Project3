import React,{Component} from 'react'
import API from "../../utils/API"
import './style.css'

class ForumRow extends Component {

    state={
        likes:0,
        likeStyle:"fa fa-thumbs-up"
    }

    likes=(id,likes)=>{
    
        const updtObj={
          id:id,
          likes: likes+1
        }
        const removObj={
          id:id,
          likes: this.state.likes-1
        }
        // let remLikes
        let newStyle
        this.setState({likeStyle:newStyle})
        if(this.state.likeStyle==="fa fa-thumbs-up"){
          newStyle="fa fa-thumbs-up likes"
          this.setState({likeStyle:newStyle})
          API.updateLike(updtObj).then(res=>{
            this.setState({likes:res.data.likes})
        
          })
        }else if(this.state.likeStyle==="fa fa-thumbs-up likes"){
          newStyle="fa fa-thumbs-up"
          this.setState({likeStyle:newStyle})
          API.updateLike(removObj).then(res=>{
           
            this.setState({likes:res.data.likes})
          })
        }
      }

    componentWillMount=()=>{
       API.getLike(this.props.id).then(res=>{
         this.setState({likes:res.data.likes})
         console.log(this.state.likes)
       })
    }
    test(){
      console.log("nothing")
    }

    render(){
      console.log(this.props.likes+"@52")
     
      
    return (
        <>
       
        <div className="forumBG rounded p-5 my-3 mx-5">
        <div className="row">
        <div className="col-6">
        <h1 className="bgTitle text-left">{this.props.title}</h1>
        </div>
        <div className="col-6 text-right">
        <img className="rounded-circle"src={this.props.forumImage} alt="Forum profile" height="100px" width="100px"/>
        </div>
        </div>
        <div className="row">
        <h3>Created by: {this.props.user}</h3>
        
        </div>
        <div id="iconRow"className="row d-flex">
        {this.props.button?<button onClick={()=>this.props.article(this.props.id)} id={this.props.id} className="btn btn-dark mx-2">Go To Post</button>
        :<></>}
        <i id="comment" className="fa fa-comment mx-2">{this.props.comments || "1"}</i>
        <i id={this.props.id} onClick={this.props.likeComment?()=>this.test:()=>this.likes(this.props.id,this.props.likes)} className={this.state.likeStyle}/><p className="likesText mx-1">{this.state.likes}</p>
        </div>
       
        </div>
        </>
    )
    }
}

export default ForumRow;