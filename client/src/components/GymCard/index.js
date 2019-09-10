import React,{Component} from 'react';
import './style.css'
class GymCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isFavorited:false
        }
      }
      toggle() {
        this.setState({isFavorited: !this.state.isFavorited});
      }


    render(){

    return(
        <>
        <div className="col-lg-4">
        <div className="card mx-1 my-2 bg-secondary" style={{"width": "100%","minHeight":"300px","boxShadow":"black 3px 3px 3px"}}>
            {this.props.details.image}
        <div className="card-body">
          <h3 className="card-title text-white">{this.props.details.name}</h3>
          <p className="card-text text-white">{this.props.details.address}</p>
          <div className="row d-flex justify-content-center">
          <p className="card-text text-white">Rating: {this.props.details.rating}</p>
          </div>
          <div className="row my-2 d-flex justify-content-center">
          <i onClick={()=>this.toggle()} className={`${this.state.isFavorited?"fa fa-star yellow":"fa fa-star"}`}></i>
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