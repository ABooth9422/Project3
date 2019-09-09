import React,{Component} from 'react';
import './style.css'
class GymCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            addClass: "fa fa-star"
         
        }
      }
      toggle() {
        this.setState({addClass: !this.state.addClass});
      }


     myFunction=(x)=> {
        
        let test = document.getElementById("thumb")
        console.log(test.className)
      if(test.className ==="fa fa-star"){
          this.setState({addClass:"fa fa-star yellow"})
      }else{
        this.setState({addClass:"fa fa-star"})
      }
       
      }


    render(props){

    return(
        <>
        <div className="col-lg-3">
        <div className="card bg-secondary" style={{"width": "18rem","boxShadow":"black 3px 3px 3px"}}>
        <img src={require('./images/150.png')} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title text-white">Gym Name</h5>
          <p className="card-text text-black">Desc goes here</p>
          <div className="row d-flex justify-content-center">
          <i onClick={()=>this.myFunction(this)} id="thumb"className={this.state.addClass}></i>
          <p className="mx-2">Add to favorites</p>
          </div>
        </div>
      </div>
      </div>
      </>
    )
    }
}

export default GymCard