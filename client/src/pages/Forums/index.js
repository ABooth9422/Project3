import React,{Component} from "react";
import Container from "../../components/Container";
import Jumbotron from "../../components/Jumbotron";
import Wrapper from "../../components/Wrapper"
import Footer from "../../components/Footer"
import API from "../../utils/API"
import ForumRow from "../../components/ForumRow"
import AddTopic from "../../components/AddTopic"
import AddComment from "../../components/AddComment"

import "./style.css"

class Forum extends Component{

 
  constructor(){
    super()

    this.state={
      posts:[],
      posting:false,
      addTopic:false,
      view:false,
      id:"",
      comment:[],
      currentArticle:[],
      likes:0,
      likeStyle:"fa fa-thumbs-up"
     
    }


  }

  componentDidMount(){
    console.log(this.props.profile)
    API.getPost().then(res => {
      this.setState({posts:res.data})
    })
  }
  goToArticle=(id)=>{
    this.setState({id:id})
    if(this.state.view){
      this.setState({view:false})
    }else{
      this.setState({view:true})
    }
  }

  addTopic=()=>{
    if(this.state.addTopic){
      this.setState({addTopic:false})
    }else{
      this.setState({addTopic:true})
    }

  }
  goBack=()=>{
    
    if(this.state.view){
      this.setState({view:false})
      API.getPost().then(res => {
        this.setState({posts:res.data})
      })
    }else{
      this.setState({view:true})
    }
  }


  makeArticle=(forumObj,commentObj)=>{
    const addArticleArray=this.state.posts
    forumObj.user= this.props.user.name
    forumObj.img=this.props.profile.img
    commentObj.user=this.props.profile.name
   
    API.addPost(forumObj).then(res=>{
      addArticleArray.push(res.data)
      commentObj.ForumId=res.data.id
      commentObj.img=this.props.profile.img
      this.setState({posts:addArticleArray})
      API.createComment(commentObj).then(res=>{
        
      })
    })
    this.addTopic()
  }

  render(){
    const forumPosts = this.state.posts 
  return (
    <>
    <Wrapper>
    <Jumbotron/>
      <Container>
            {!this.state.view?
            <>
            <header className="my-5 p-5rounded">
              <div className="forum__bg p-5 "></div>
              <h1 id="forumHead" className="display-1 rounded mt-5 text-black">Forum Page</h1>
              </header>
              <h3 className="text-center  p-5 text-white">The Gym Sense forums are a place to ask questions, discuss routines, debate dietary practices, or share personal accomplishments to inspire others.
               Please be considerate and respectful to other Gym Sense members. Moderators reserve the right to delete any content deemed unfit for the Gym Sense forum.</h3>
                <button type="button" onClick={this.addTopic} className="btn-lg btn-secondary mb-5">Add a Forum Topic!</button>
                {this.state.addTopic ? <AddTopic AddTopic={this.makeArticle}/>:<></>}
                {forumPosts.map(article => {
                  return(
                <ForumRow
                key={article.id}
                title={article.post}
                likes={article.likes}
                user={article.user}
                article={this.goToArticle}
                id={article.id}
                comments={"Comments" in article ?article.Comments.length:"1"}
                forumImage={article.img}
                
                button={true}
                />
                  )
              })} 
              </>
            :<>
              <header className="my-5 p-5rounded">
              <div className="forum__bg p-5 "></div>
              <h1 id="forumHead" className="display-1 rounded mt-5 text-black">Forum Page</h1>
              </header>
            
            <AddComment back={this.goBack} user={this.props.user.name} id={this.state.id}  comment={this.postComment}/></>}

              
      </Container>
    </Wrapper>
    <Footer/>
    </>
  );
  }
}

export default Forum;
