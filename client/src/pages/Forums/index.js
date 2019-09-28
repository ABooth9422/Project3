import React, { Component } from 'react'
import Container from '../../components/Container'
import Jumbotron from '../../components/Jumbotron'
import Wrapper from '../../components/Wrapper'
import API from '../../utils/API'
import AddTopicForm from '../../components/AddTopicForm'
import AddCommentForm from '../../components/AddCommentForm'
import Button from '../../components/Button'

import './style.css'
import ForumTopic from '../../components/ForumTopic'

class Forum extends Component {
  constructor () {
    super()

    this.state = {
      forumTopics: [],
      showAddTopic: false,
      topicTitleInput: "",
      topicPostInput: "",
      commentInput: "",
      showComments: false,
      load: true,
      reset:true,
      showAddComment:false,
      comment:false
    }
  }

  componentDidMount () {
    this.getAllForumTopics()
  }

  toggleShowAddTopic = () => {
    this.setState({ showAddTopic: !this.state.showAddTopic })
  }

  topicTitleInputChange = (event) => {
    this.setState({ topicTitleInput: event.target.value })
  }

  topicPostInputChange = (event) => {
    this.setState({ topicPostInput: event.target.value })
  }

  commentInputChange = (event) => {
    this.setState({ commentInput: event.target.value })
  }

  commentForumSubmit = (event) => {
    event.preventDefault()
    if(this.state.commentInput.trim().length>=1){
    this.setState({comment:false,showAddComment:true})
    
    const commentObj = {
      post: this.state.commentInput,
      UserId: this.props.profile.id,
      ForumTopicId: this.state.forumTopics[0].id
    }
   
    API.createComment(commentObj)
      .then((response) => {
        this.setState({ commentInput: ''})
        this.getForumTopic(response.data.ForumTopicId)
      })
      .catch((err) => console.log(err))
    }
  }

  topicForumSubmit = (event) => {
    event.preventDefault()
    const formObj = {
      topic: this.state.topicTitleInput,
      post: this.state.topicPostInput,
      UserId: this.props.profile.id
    }
    if(this.state.topicTitleInput.trim().length>=1&&this.state.topicPostInput.trim().length>=1){
    API.createForumTopic(formObj)
      .then((response) => {
        console.log(response)
        this.setState({
          topicTitleInput: '',
          topicPostInput: '',
          showAddTopic: false
        })
        this.getAllForumTopics()
      })
      .catch((err) => console.log(err))

    }
  }

  getAllForumTopics () {
    API.getAllForumTopics()
      .then((response) => {
        this.setState({ forumTopics: response.data })
      })
      .catch((err) => console.log(err))
  }

  getForumTopic (id) {
    API.getForumTopic(id).then((response) => {
      this.setState({ forumTopics: [response.data] })
    })
  }

  openTopic = (id) => {
    const topic = this.state.forumTopics.filter((fTopic) => fTopic.id === id)
    this.setState({
      forumTopics: topic,
      showComments: true,
      showAddComment: true,
      load: false
    })
  }

  goBack = () => {
    this.setState({
      showComments: false,
      showAddComment: false,
      comment:false,
      load: true
    })
    this.getAllForumTopics()
  }

  likeTopic = (topic) => {
    const likedByArray = topic.likedBy.split(',')
    const obj = {}

    if (likedByArray.includes(`${this.props.profile.id}`)) {
      obj.likedBy = likedByArray.filter((likedBy) => likedBy !== `${this.props.profile.id}`).join(',')
    } else {
      obj.likedBy = topic.likedBy ? `${topic.likedBy},${this.props.profile.id}` : `${this.props.profile.id}`
    }

    API.updateFormTopic(topic.id, obj).then((response) => {
      this.getAllForumTopics()
    })
  }

  toggleComment=()=>{
    if(this.state.comment){
      this.setState({comment:false})
      this.setState({showAddComment:true})
    }else{
    this.setState({comment:true})
    this.setState({showAddComment:false})
    }
  }

  render () {
    const addTopicForm = this.state.showAddTopic ? (
      <AddTopicForm
        titleInputChange={this.topicTitleInputChange}
        postInputChange={this.topicPostInputChange}
        topicValue={this.state.topicTitleInput}
        postvalue={this.state.topicPostInput}
        formSubmit={this.topicForumSubmit}
      />
    ) : null

    const addCommentForm = 
      
      <AddCommentForm
        commentInputChange={this.commentInputChange}
        commentFormSubmit={this.commentForumSubmit}
        value={this.state.commentInput}
        goBack={this.goBack}
      />
      

    return (
      <>
        <Wrapper>
          <Jumbotron />
          <Container>
            <header className='my-5 p-5rounded'>
              <div className='forum__bg p-5 ' />
              <h1 id='forumHead' className='display-1 rounded mt-5 text-black'>
                Forum Page
              </h1>
            </header>
            <h3 className='text-center  p-5 text-white'>
              The GymSense forum is a place to ask questions, discuss routines, debate dietary practices or share
              personal accomplishments to inspire others. Please be considerate and respectful to other GymSense
              members. Moderators reserve the right to delete any content deemed unfit for the GymSense forum.
            </h3>
            {this.state.load ? (
              <Button type='button' clickHandle={this.toggleShowAddTopic} style={{ marginBottom: '3rem !important' }}>
                Add a Forum Topic!
              </Button>
            ) : (
              <></>
            )}
            {addTopicForm}
            {this.state.forumTopics
              .sort((a, b) => {
                let aLikes = a.likedBy.split(',').length
                let bLikes = b.likedBy.split(',').length
                return bLikes - aLikes
              })
              .map((topic) => {
                return (
                  <ForumTopic
                    key={topic.id}
                    title={topic.topic}
                    post={topic.post}
                    likes={topic.likedBy ? topic.likedBy.split(',').length : 0}
                    hasLiked={
                      this.props.profile ? topic.likedBy.split(',').includes(`${this.props.profile.id}`) : false
                    }
                    clickLikeHandle={() => this.likeTopic(topic)}
                    authorProfile={topic.User}
                    profile={this.props.profile}
                    comments={topic.Comments}
                    showComments={this.state.showComments}
                    goToPost={() => {
                      this.openTopic(topic.id)
                    }}
                    open={this.state.showComments}
                  />
                )
              })}
            {this.state.showAddComment?<><Button clickHandle={this.toggleComment}>Add Comment</Button><Button clickHandle={this.goBack}>Go Back</Button></>:<></>}
            {this.state.comment?addCommentForm:<></>}
          </Container>
        </Wrapper>
      </>
    )
  }
}

export default Forum
