import React,{Component} from "react";
import Container from "../../components/Container";
import Jumbotron from "../../components/Jumbotron";
import Wrapper from "../../components/Wrapper"
import Footer from "../../components/Footer"
import API from "../../utils/API"
import ForumRow from "../../components/ForumRow"
import AddTopic from "../../components/AddTopic"
// import AddComment from "../../components/AddComment"

import "./style.css"

class Forum extends Component{

 
  constructor(){
    super()

    this.state={
      posts:[],
      posting:false,
      comment:false,
      test:""
     
    }


  }

  componentDidMount(){
    API.getPost().then(res => {
      this.setState({posts:res.data})
      console.log(res)
    })
  }
  goToArticle(id){
    console.log("go to article")
    console.log(id)
  }
  makeArticle=(forumObj)=>{
    const addArticleArray=this.state.posts
    forumObj.user= this.props.user.googleId
    console.log(forumObj)
    API.addPost(forumObj).then(res=>{
      addArticleArray.push(res.data)
      this.setState({posts:addArticleArray})
    })

  }

  render(){
    const forumPosts = this.state.posts
    
  return (
    <>
    <Wrapper>
    <Jumbotron/>
      <Container>

            <header className="my-5 p-5rounded">
              <div className="forum__bg p-5 "></div>
              <h1 id="forumHead" className="display-1 rounded mt-5 text-black">Forum Page</h1>
              </header>
              <h3 className="text-center  p-5 text-white">The Gym Sense forums are a place to ask questions, discuss routines, debate dietary practices, or share personal accomplishments to inspire others.
               Please be considerate and respectful to other Gym Sense members. Moderators reserve the right to delete any content deemed unfit for the Gym Sense forum.</h3>
      
      {forumPosts.map(article => {
         return(
         <ForumRow
         key={article.id}
         title={article.post}
         likes={article.likes}
         user={article.user}
         article={this.goToArticle}
         id={article.id}
         />
         )
      })}
      <AddTopic AddTopic={this.makeArticle}/>
      </Container>
    </Wrapper>
    <Footer/>
    </>
  );
  }
}

export default Forum;
