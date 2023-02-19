import React, { useEffect, useState ,component} from 'react'
import ReactDOM from 'react-dom'
// import axios from 'axios'
// import SignUpUser from './components/SignUpUser.jsx'
// import Profile from './components/Profile.jsx'
// import Singin from './components/Singin.jsx'
// import Profile from './DashBoard/FournisseurProfile/Profile.jsx';
// import ProductList from './DashBoard/ProductList/ProductList.jsx'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Navbar from '../src/components/Navbar.jsx'
import Home from './pages/Home.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Favorite from './pages/Favorite.jsx';
import Electronic from './pages/Electronic.jsx';
import Signf from './Signf.jsx'
import Signeupf from './pages/Signeupf.jsx'
import Main from './DashBoard/Main.jsx'

const App = () => {
const [name,setName]=useState('')
const [companyname,setcompanyName]=useState('')

  useEffect(()=>{(
      async()=>{
        const response=await fetch("http://localhost:3000/api/fournisseur/getf",{
          headers: {'Content-Type': 'application/json'},
          credentials :'include',
        })
        const content=await response.json()
        setcompanyName(content.companyname)
      }
    )
  },[])

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

{/* <ProductList/> */}
      <Router>
      <Navbar/>
      <Routes> 
      {/* <Route path='/profile' element={<Profile/>} /> 
      <Route path='/up' element={<SignUpUser/>} />
      <Route path='/login' element={<Singin setName={setName}/>} /> */} 
       
    {/* <Route exact path="/ProductList" element={<ProductList/>}/> */}
    
    <Route exact path="/" element={<Home/>}/>
    <Route path='/up' element={<Signeupf/>} /> 
    <Route path='/loginf' element={<Signf setcompanyName={setcompanyName}/>}/>
    <Route exact path='/dash' element={< Main/>}/>
    <Route exact path="/product" element={<ProductDetails/>}/>
    <Route exact path="/fav" element={<Favorite/>}/>  
    <Route exact path="/elec" element={ <Electronic/>}/> 
    {/* iheb work has conflit */}
    </Routes>
   </Router>

    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('app'))
