import React, { useEffect, useState ,component} from 'react'
import ReactDOM from 'react-dom'
// import Basket from "./Basket.jsx"
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Navbar from '../src/components/Navbar.jsx'
import Home from './pages/Home.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Favorite from './pages/Favorite.jsx';
import Electronic from './pages/Electronic.jsx';
import Basket from './Basket.jsx';


const App = () => {
  return (
    <div>

      <Basket />
  {/* <Router>
      <Navbar/>
  <div>

    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/product" element={<ProductDetails/>}/>
    <Route exact path="/fav" element={<Favorite/>}/>
    <Route exact path="/elec" element={ <Electronic/>}/>
   <Route exact path="/basket" element= {<Basket/>}/>
    </Routes>
  </div>
</Router> */}
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('app'))
