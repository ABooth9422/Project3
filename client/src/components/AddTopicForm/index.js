import React,{Component} from 'react'
import Form from '../Form'
import TextInput from '../TextInput'
import TextAreaInput from '../TextAreaInput'
import Button from '../Button'
import './style.css'
import Container from '../Container'



class AddTopicForm extends Component{
  
  render(){

  return (
      <Container className='container'>
          <div className='row justify-content-center'>
              <div className='col-12 col-md-6'>
                <Form className='topicContent rounded px-md-5 px-2 py-3'>
                    <h1 className="display-3 my-5 font-weight-bold">Add a topic</h1>
                    <TextInput id='forumTopic' label='Topic' changeHandle={this.props.titleInputChange} placeholder='What is your topic?'>{this.props.topicValue}</TextInput>
                    <TextAreaInput id='forumPost' label='Comment' changeHandle={this.props.postInputChange} placeholder='Add comment'>{this.props.postValue}</TextAreaInput>
                    <Button type='submit' clickHandle={this.props.formSubmit}>Submit </Button>
                </Form>
              </div>
          </div>
      </Container>
    
    )
  }
}

export default AddTopicForm;