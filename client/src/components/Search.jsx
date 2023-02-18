import React, { useState } from 'react'
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { useNavigate } from 'react-router-dom';

function Search() {
    const [product,setProduct]=useState('')
    const navigate = useNavigate()

    const onChange=(e)=>{
        setProduct(e.target.value)
    }
   
    // const handleSearch=(e)=> {
    //     e.preventDefault();
    //     setResults(
    //      props.data.filter(function(item) {
    //         return item.name.includes(searchTerm) || item.categorie.includes(searchTerm);
    //       })
        // );
      // }
  return (

<div className='search' >
  
       <select  className="all">
             <option id='categ'>All categories</option>
              <option>food</option>
              <option onClick={() => navigate("/elec")}>Electronic</option>
              <option>accessoires</option> 
            </select>  
           <input className="input-s" type="text" placeholder="I'm searching for ..."  onChange={onChange}/> 
           <ManageSearchIcon onClick={() => navigate("/elec")} />
      
   
    </div>
  )
}

export default Search
