import React, { useEffect, useState ,component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Signf from './Signf.jsx'
import Navbar from '../src/components/Navbar.jsx'
import Home from './pages/Home.jsx'
import ProductDetails from './pages/ProductDetails.jsx'

import Signeupf from './pages/Signeupf.jsx'
import Favorite from './pages/Favorite.jsx';

import Electronic from './pages/Electronic.jsx';





const App = () => {
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
  })

  return (

    <div className='App'>
    {/* <Router>
    <Routes>
    <Route path='/' element={<Signeupf/>} />
    <Route path='/loginf' element={<Signf setcompanyName={setcompanyName}/>} />
    </Routes>
    </Router> */}
 
   
   <Router>
      <Navbar/>
     <Routes>
     <Route exact path="/" element={<Home/>}/>
     <Route exact path="/product" element={<ProductDetails/>}/>
     <Route exact path="/fav" element={<Favorite/>}/>
     <Route exact path="/elec" element={ <Electronic/>}/>
     
     </Routes>
   
 </Router>
     </div>
)
}

ReactDOM.render(<App />, document.getElementById('app'))
