import React, { useEffect, useState ,component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
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
import Search from './components/Search.jsx';
// import Signf from './Signf.jsx'
// import Signeupf from './pages/Signeupf.jsx'


const App = () => {
const [name,setName]=useState('')
const [companyname,setcompanyName]=useState('')
const [products,setProducts]=useState([])
const [change,setChange]=useState(false); 
const [singleProduct, setSingleProduct]= useState([])



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


// fetching data
useEffect(() => {
  axios.get('/api/product/getAllp')
  .then(result=>{console.log(result)
  setProducts(result.data)})
  .catch(err=>console.log(err))
}, [change])

const getOne=(id)=>{
  axios.get(`http://localhost:3000/api/product/one/${id}`)
  .then (result=>{console.log(result)})
}

let dataSearch = (value)=>{
  const newproduct= products.filter(e=>(e.name.toLowerCase()).includes(value.toLowerCase()))
   setProducts(newproduct)
 }
  
  return (
    <div className='App'>
      <Router>
      <Navbar/>
      <Routes> 
      {/* <Route path='/profile' element={<Profile/>} /> 
      <Route path='/up' element={<SignUpUser/>} />
      <Route path='/login' element={<Singin setName={setName}/>} /> */} 
       {/* 
    <Route path='/' element={<Signeupf/>} />
    <Route path='/loginf' element={<Signf setcompanyName={setcompanyName}/>} />
    */}
     {/* <Route exact path="/ProductList" element={<ProductList/>}/> */}
    <Route exact path="/" element={<Home setSingleProduct={setSingleProduct} data = {products}/>}/>
    <Route exact path="/product" element={<ProductDetails data={singleProduct}/>}/>
    <Route exact path="/fav" element={<Favorite/>}/>
    <Route exact path="/elec" element={ <Electronic/>}/>
    <Route exact path="/search" element={<Search dataFiltred={dataSearch}/>}/> 
    </Routes>
   </Router>
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('app'))
