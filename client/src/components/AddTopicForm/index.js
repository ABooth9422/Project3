import React from 'react'
import Form from '../Form'
import TextInput from '../TextInput'
import TextAreaInput from '../TextAreaInput'
import Button from '../Button'
import './style.css'
import Container from '../Container'



function AddTopicForm(props){
  return (
      <Container className='container'>
          <div className='row justify-content-center'>
              <div className='col-12 col-md-6'>
                <Form className='topicContent rounded px-md-5 px-2 py-3'>
                    <h1 className="display-3 my-5 font-weight-bold">Add a topic</h1>
                    <TextInput id='forumTopic' label='Topic' changeHandle={props.titleInputChange} placeholder='What is your topic?'>{props.topicValue}</TextInput>
                    <TextAreaInput id='forumPost' label='Comment' changeHandle={props.postInputChange} placeholder='Add comment'>{props.postValue}</TextAreaInput>
                    <Button type='submit' clickHandle={props.formSubmit}>Submit </Button>
                </Form>
              </div>
          </div>
      </Container>
    
    )
}

export default AddTopicForm;