import React,{useEffect,useState} from 'react'
import axios from 'axios';




function Profile(props) {
 
console.log("Props of profile",props)


   

  return (
    
    <div>

<div class="cardDash">
     <div> <img src="img.jpg"  />
  <h1>{props.Fournisseur[0].manager}</h1>
  <p class="title">CEO & Founder,{props.Fournisseur[0].CompanyName} </p>
  <p>Harvard University</p>
  <a href="#"><i class="fa fa-dribbble"></i></a>
  <a href="#"><i class="fa fa-twitter"></i></a>
  <a href="#"><i class="fa fa-linkedin"></i></a>
  <a href="#"><i class="fa fa-facebook"></i></a>
  <p><button id='dashbutton'>Contact</button></p> 
  </div>

  </div>

   
    </div>
 

  )
}

export default Profile