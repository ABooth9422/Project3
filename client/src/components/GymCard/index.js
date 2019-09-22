import React from 'react';
import './style.css'
function GymCard (props){

    return(
        <>
        <div className='row'>
        <div className="col-12">
        <div className="card mx-1 my-2 bg-secondary">
            <img className='gymImage' alt='Gym' src={props.img?props.img :props.img}/>
        <div className="card-body">
          <h3 className="card-title text-white">{props.name?props.name :props.name}</h3>
          <p className="card-text text-white">{props.address?props.address :props.address}</p>
          <div className="row d-flex justify-content-center">
          <p className="card-text text-white">Rating: {props.rating?props.rating :props.rating}</p>
          </div>
          <div className="row my-2 d-flex justify-content-center">
          <i onClick={props.favClick} className={props.favorited ? "fa fa-star yellow" : "fa fa-star"}></i>
          <p className="mx-2">{props.favorited ? "Remove from favorites" : "Add to favorites"}</p>
          </div>
        </div>
      </div>
      </div>
      </div>
      </>
    )
  }


export default GymCard