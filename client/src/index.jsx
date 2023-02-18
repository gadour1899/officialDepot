import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import axios from 'axios'
import SignUpUser from './components/SignUpUser.jsx'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Profile from './components/Profile.jsx'
import Singin from './components/Singin.jsx'


const App = () => {
const [name,setName]=useState('')

const getCookies = () => {
  // document.cookie 
  console.log('hello world',document.cookie);
}
useEffect(() =>{
  getCookies()
})
useEffect(()=>{(

    async()=>{
      const response=await fetch("http://localhost:3000/api/user/getUsers",{
        headers: {'Content-Type': 'application/json'},
        credentials :'include',
      })
      const content=await response.json()
      setName(content.name)
    }
  )()
},[])
  
  return (
    <div className='App'>
      <Router>
      <Routes> 
      {/* <Route path='/profile' element={<Profile/>} /> 
      <Route path='/up' element={<SignUpUser/>} />
      <Route path='/login' element={<Singin setName={setName}/>} /> */}
      </Routes>
      </Router>
    </div>   
      
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
