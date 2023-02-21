import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Signf = () => {


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
      axios.post('http://localhost:3000/api/fournisseur/login',body)
      .then((result)=>{
          console.log(result); 
          navigate("/dash");
      })
      .catch(err=>{
          console.log(err);
      })
      setRedirect(true)
  }
  return (
   
<div className="login">
      <div className="bg-img">
        <form action="/action_page.php" className="contenu">
          <h2> Sign In </h2>
          <label htmlFor="email">
            <b><i class="fa fa-envelope" aria-hidden="true"></i> Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <label htmlFor="psw">
            <b><i class="fa fa-key" aria-hidden="true"></i> Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            onChange={(e)=>{setPassword(e.target.value)}}
          />
          <button type="submit" className="beetn" 
          onClick={handleSubmit}> <p onClick={()=>navigate("/dash")}>
           Submit </p>
          </button>

          <p className="compte">Don’t have an account?</p>
          <a href="#" className="txt3" onClick={() => navigate("/up")} >
              Sign up now
            </a>
        </form>
      </div>
    </div> 
  )
}
export default Signf
