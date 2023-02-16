import React, { useEffect, useState ,component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter , Route,  Routes} from "react-router-dom"
// import $ from 'jquery'
// import axios from 'axios'
import Navbar from '../src/components/Navbar.jsx'
import Home from './pages/Home.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Pannier from './pages/Pannier.jsx'
import Signeupf from './pages/Signeupf.jsx'



const App = () => {

  return (
    <div>
      <Navbar/>
<ProductDetails/>
    <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/product" element={<ProductDetails/>}/>
    <Route path="/pannier" element={<Pannier/>}/>
    <Route path="/singup" element={ < Signeupf />}/>
    
   </Routes>
  </BrowserRouter>
      
     
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
