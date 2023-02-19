import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from'react-router-dom'

const signUpUser = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [adress,setAddress]=useState('')
    const  [phoneNumber,setPhoneNumber]=useState('')
    const [redirect , setRedirect]=useState(false)
    const navigate = useNavigate();

    const handleName=(e)=>{
        setName(e.target.value)
        console.log(e.target.value); 
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value) 
        console.log(e.target.value);
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value) 
        console.log(e.target.value);
    }
    const handleAddress=(e)=>{
        setAddress(e.target.value)
        console.log(e.target.value); 
    }
    const handlePhoneNumber=(e)=>{
        setPhoneNumber(e.target.value) 
        console.log(e.target.value);
    }

    const addUser=()=>{
        let body = {
            name:name,
            email:email,
            password:password,
            address:adress,
            phoneNumber:phoneNumber     
        }
        axios.post('http://localhost:3000/api/user/signup',body)
        .then((result)=>{
            console.log(result);
            navigate("/login");
        })
        .catch(err=>{
            console.log(err);
        })
        navigate("/login");
        setRedirect(true)
    }

  return (
    <div id="signup"> 
      <form id="form">
            <a href="#"><i class="fa fa-user" aria-hidden="true"></i></a> <input type="text" name="name" placeholder="Enter your name" onChange={handleName}/> <br/>
           <a href='#'><i class="fa fa-envelope" aria-hidden="true"></i></a> <input type="text" name="email"  placeholder="Enter your email" onChange={handleEmail}/> <br/>
           <a href='#'><i class="fa fa-key" aria-hidden="true"></i></a> <input type="password" name="password"  placeholder="Enter your password" onChange={handlePassword}/> <br/>
           <a href='#'><i class="fa fa-map-marker" aria-hidden="true"></i></a> <input type="text" name="adress"  placeholder="Enter your adress" onChange={handleAddress}/> <br/>
           <a href='#'><i class="fa fa-phone-square" aria-hidden="true"></i></a> <input type="tel" name="phoneNumber"  placeholder="Enter your phone" onChange={handlePhoneNumber}/> <br/>
        </form> 
       <button id="button1" type='submit' onClick={addUser}><b/>SignUp</button>
    </div>
  )
}


export default signUpUser
