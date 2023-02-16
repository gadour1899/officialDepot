import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const signUpUser = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [adress,setAddress]=useState('')
    const  [phoneNumber,setPhoneNumber]=useState('')

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
        axios.post('http://localhost:3000/api/user/addu',body)
        .then((result)=>{
            console.log(result);
        })
        .catch(err=>{
            console.log(err);
        })
    }

  return (
    <div id="signup"> 
      <form id="form">
            <input type="text" name="name" placeholder="Enter your name" onChange={handleName}/> <br/>
            <input type="text" name="email"  placeholder="Enter your email" onChange={handleEmail}/> <br/>
            <input type="text" name="password"  placeholder="Enter your password" onChange={handlePassword}/> <br/>
            <input type="text" name="adress"  placeholder="Enter your adress" onChange={handleAddress}/> <br/>
            <input type="text" name="phoneNumber"  placeholder="Enter your phone" onChange={handlePhoneNumber}/> <br/>
        </form> 
        <button type='submit' onClick={addUser}>SignUp</button>
    </div>
  )
}


export default signUpUser
