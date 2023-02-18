import React from 'react'

export const Singin = () => {
  return (
    <div>
        <form action="">
            <input type="text"
            placeholder='email'
            onChange={(e)=>{(e.target.value)}} /><br />
            <input type="text"
            placeholder='mode passe'
            onChange={(e)=>{(e.target.value)}} /><br />
        </form>
        <button>add</button>
    </div>
    
    
/* <div className="login">
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
            
          />
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            
          />

          <button type="submit" className="beetn" >
           Submit
          </button>

          <p className="compte">Don’t have an account?</p>
          <a href="#" className="txt3">
  //             Sign up now
            </a>
        </form>
      </div>
    </div> */
  )
}
export default Singin