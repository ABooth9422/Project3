import React,{Component} from 'react'
import Form from '../Form'
import TextInput from '../TextInput'
import Button from '../Button'
import './style.css'
import Container from '../Container'



class AddCommentForm extends Component{
 
  render(){
  return (
      <Container className='container my-5'>
          <div className='row justify-content-center'>
              <div className='col-12 col-md-6'>
                <Form className='topicContent rounded px-md-5 px-2 py-3'>
                    <h1 className="display-3 font-weight-bold my-5">Add Comment</h1>
                    <TextInput id='forumTopic' changeHandle={this.props.commentInputChange} placeholder='What is your comment?'>{this.props.value}</TextInput>
                    <Button type='submit' clickHandle={this.props.commentFormSubmit}>Submit </Button>
                    <Button type='button' clickHandle={this.props.goBack}>Go Back </Button>
                </Form>
              </div>
          </div>
      </Container>
    
    )
  }
}

export default AddCommentForm;