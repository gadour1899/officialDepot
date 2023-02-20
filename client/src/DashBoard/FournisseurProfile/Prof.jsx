import React,{useEffect,useState} from 'react'
import axios from 'axios';
import {useLocation} from 'react-router-dom'




function Prof() {
  const location=useLocation()

console.log("location",location.state.data);

   

  return (
    
    <div>
      <div className="card">
   
  <h2>{location.state.data.manager}</h2>
  <p class="title" >Manager,{location.state.data.CompanyName} </p>
  <p>Harvard University</p>
  <a href="#"> <i class="fa fa-dribbble">  </i></a>
  <a href="#"> <i class="fa fa-twitter">  </i></a>
  <a href="#"> <i class="fa fa-linkedin">  </i></a>
  <a href="#"> <i class="fa fa-facebook">  </i></a>
  <p>ADRESS : {location.state.data.adress}</p> 
  <div> <img src={location.state.data.image}  width="100px" height="70px"/></div>

  </div>
  </div>

   

 

  )
}

export default Prof ;