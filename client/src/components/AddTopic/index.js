import React,{Component} from 'react'

import './style.css'

class AddTopic extends Component{


    state={
        topic:"",
        comment:""
    }

    handleChange =(event) =>{
        let topic=event.target.value    
       this.setState({topic:topic})
      }
    handleComment=(event)=>{
        let comment= event.target.value
        console.log(comment)
        this.setState({comment:comment})
    }

render(){
    console.log(this.state.topic)
   
    const post={
        post:this.state.topic,
        likes:0
    }
    const comment={
        post:this.state.comment
    }
  return (
        <>
            <form className="bg-secondary p-5 mx-5 rounded">
                           <div className="d-flex justify-content-center">
                    <div className="form-group row">
                        <label  className="col-md-2 col-form-label">Topic</label>
                        <div className="col-md-10">
                            <input type="text" name="name" onChange={this.handleChange}className="form-control" size="35" id="forumTopic"
                                placeholder="What is your topic?"/>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="form-group row">
                        <label>Comment</label>
                        <textarea onChange={this.handleComment} className="form-control" name="message" size="35" id="firstComment"
                            rows="6" cols="40"></textarea>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button type="button"onClick={()=>this.props.AddTopic(post,comment)} className="btn btn-lg btn-dark mb-2">Submit</button>
                </div>
            </form>
      </>
    )
}
    
}
  

export default AddTopic;