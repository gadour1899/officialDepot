import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from'react-router-dom'

const  SignUpUser = () => {
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
    <div className="login">
    <div className="bg-img">
      <form action="/action_page.php" className="contenup">
        <h2> Sign Up</h2>
          <label htmlFor="psw">
          <b><i class="fa fa-user" aria-hidden="true"></i>  Name</b>
        </label>
        <input
          type="text"
          placeholder="Manager Name"
          name="psw"
          onChange={handleName}/>
        <label htmlFor="email">
          <b><i class="fa fa-envelope" aria-hidden="true"></i> Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          onChange={handleEmail} />
        <label htmlFor="psw">
          <b><i class="fa fa-key" aria-hidden="true"></i> Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          onChange={handlePassword}/>
          <label htmlFor="psw">
          <b><i class="fa fa-map-marker" aria-hidden="true"></i> Adress</b>
        </label>
        <input
          type="text"
          placeholder="Enter Adress"
          name="psw"
          onChange={handleAddress}/>
          <label htmlFor="psw">
          <b><i class="fa fa-phone-square" aria-hidden="true"></i> Phone Number</b>
        </label>
        <input 
          type="text"
          name="phoneNumber"  
          placeholder="Enter your phone" 
          onChange={handlePhoneNumber}/>
        <button type="submit" className="beetn" 
        onClick={addUser}> <p onClick={()=>navigate("/login")}>
         Submit </p>
        </button>
      </form>
    </div>
    </div>
    
  )
}


export default SignUpUser


