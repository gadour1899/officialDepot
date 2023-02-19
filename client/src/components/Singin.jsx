import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom' 
import axios from 'axios'

export const Singin = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
      let body = {
          email:email,
          password:password,
      }
      axios.post('http://localhost:3000/api/user/login',body)
      .then((result)=>{
          console.log(result);
          navigate("/profile");
      })
      .catch(err=>{
          console.log(err);
      })
      setRedirect(true)
  }

  return (
    <div>
        <form action="">
            <input type="text"
            placeholder='email'
            onChange={(e)=>{setEmail(e.target.value)}} /><br />
            <input type="text"
            placeholder='mot de passe'
            onChange={(e)=>{setPassword(e.target.value)}} /><br />
        </form>
        <p onClick={()=>navigate()}><button onClick={handleSubmit}>Login</button></p>
    </div>
  )
}
export default Singin