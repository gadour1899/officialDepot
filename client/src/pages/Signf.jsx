import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export const Signf = (props) => {

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
          navigate("/Profile"); //you need to change this to the
      })
      .catch(err=>{
          console.log(err);
      })
      setRedirect(true)
  }
  return (
    // <div>
    //     <form id='signeF'>
    //         <input type="text"
    //         placeholder='email'
    //         onChange={(e)=>{setEmail(e.target.value)}} /><br />
    //         <input type="password"
    //         placeholder='mot de passe'
    //         onChange={(e)=>{setPassword(e.target.value)}} /><br />
    //     </form>
    //     <p onClick={()=>navigate()}><button id='butF' onClick={handleSubmit}>Login</button></p>
    // </div>
    
    ////
    <div className="login">
      <div className="bg-img">
        <form action="/action_page.php" className="contenu">
          <h1> Sign In </h1>
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            onChange={(e)=>{setPassword(e.target.value)}}
          />

          <button type="submit" className="beetn" 
          onClick={handleSubmit}> <p onClick={()=>navigate()}>
           Submit </p>
          </button>

          <p className="compte">Don’t have an account?</p>
          <a href="#" className="txt3" >
              Sign up now
            </a>
        </form>
      </div>
    </div> 
  )
}
export default Signf