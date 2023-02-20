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
    

        <div className="logo ">
            <img className="h-8 " src="./logo.jpg" alt="" onClick={() => navigate("/")}/>
       </div> 
          {/* search */}
         <Search dataSearch={props.dataSearch}/>
          {/* buttons */}
          <div className="icons">
          <div className='iconN'><PersonOutlineIcon onClick={() => navigate("/loginf")} /></div>
         <div className='iconN'><FavoriteBorderIcon onClick={() => navigate("/fav")}/></div> 
        <div className='iconN'><LocalGroceryStoreIcon onClick={() => navigate("/basket")}/></div>
          </div>
       </nav>

  )
}

export default Navbar
