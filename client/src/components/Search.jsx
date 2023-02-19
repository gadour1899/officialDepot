import React, { useState } from 'react'
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { useNavigate } from 'react-router-dom';

function Search(props) {
  console.log("search", props);
 const navigate = useNavigate()
 const [search, setSearch] = useState("");

    const handleChange = (event) => {
      console.log(event.target.value);
       setSearch(event.target.value);
       props.dataSearch(search)
     };
   

  return (
<section>
<div className='search' >
       <select  className="all">
             <option id='categ'>All categories</option>
              <option>food</option>
              <option onClick={() => navigate("/elec")}>Electronic</option>
              <option>accessoires</option> 
            </select>  
            <div id="inpu">
           <input id="inp"
            type="text"
            placeholder="Im searching for ..."
            onChange={handleChange}
            />
         </div>
           <ManageSearchIcon onClick={() => navigate("/elec")} />
    </div>
</section>

  )
}

export default Search;
