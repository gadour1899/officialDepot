import React, { useState } from 'react'
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { useNavigate } from 'react-router-dom';

function Search(props) {
 const navigate = useNavigate()
 const [search, setSearch] = useState("");

    const handleChange = (event) => {
      console.log(event.target.value);
       setSearch(event.target.value);
       props.dataFiltred(search)
     };
   

  return (

<div className='search' >
       <select  className="all">
             <option id='categ'>All categories</option>
              <option>food</option>
              <option onClick={() => navigate("/elec")}>Electronic</option>
              <option>accessoires</option> 
            </select>  
           <input className="input-s" type="text" placeholder="I'm searching for ..."  onChange={handleChange}/> 
           <ManageSearchIcon onClick={() => navigate("/elec")} />
    </div>
  )
}

export default Search;
