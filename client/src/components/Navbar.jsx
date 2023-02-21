
import React from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import Search from '../components/Search.jsx';
import { useNavigate } from 'react-router-dom';

// import { Link } from 'react-router-dom';

function Navbar(props) {
  const navigate = useNavigate()
  
  return (
 
      <nav className="navigation">
    

        <div >
            <img  className="logo " src="./logo.jpg" alt="" onClick={() => navigate("/")}/>
       </div> 
          {/* search */}
         <Search dataSearch={props.dataSearch}/>
          {/* buttons */}
          <div className="icons">

          <div><PersonOutlineIcon   sx={{
          ml:"100px",
            mt: "20px",
            height: "20px",
            width: "20px",
           }}onClick={() => navigate("/loginf")} /></div>

         <div ><FavoriteBorderIcon  sx={{
          ml:"100px",
            mt: "20px",
            height: "20px",
            width: "20px",
           }} onClick={() => navigate("/fav")}/></div> 
        <div ><LocalGroceryStoreIcon  sx={{
          ml:"100px",
            mt: "20px",
            height: "20px",
            width: "20px",
           }} onClick={() => navigate("/basket")}/></div>
          </div>
       </nav>

  )
}

export default Navbar
