import React, { useState } from 'react'
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

function Search() {
    const [product,setProduct]=useState('')
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
    <div>
           <select className="all" >
              <option>all categories</option>
              <option>food</option>
              <option>electroniques</option>
              <option>accessoires</option>


            </select>  
            <input className="input-s" type="text" placeholder="I'm searching for ..."  onChange={onChange}/>
            
          <ManageSearchIcon/>
       
   
          
    </div>
  )
}

export default Search
