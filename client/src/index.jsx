import React, { useEffect, useState ,component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Navbar from '../src/components/Navbar.jsx'
import Home from './pages/Home.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Pannier from './pages/Pannier.jsx'
import Signeupf from './pages/Signeupf.jsx'
import Favorite from './pages/Favorite.jsx';
import Singin from './pages/Singin.jsx';
import Electronic from './pages/Electronic.jsx';




const App = () => {

  return (
    <div>
   
  <Router>
      <Navbar/>
  <div>

    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/product" element={<ProductDetails/>}/>
    <Route exact path="/fav" element={<Favorite/>}/>
    <Route exact path="/pannier" element={<Pannier/>}/>
    <Route exact path="/singup" element={ <Singin/>}/>
    <Route exact path="/elec" element={ <Electronic/>}/>
    
    </Routes>
  </div>
</Router>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
