import React from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import Search from '../components/Search.jsx';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className="navigation">
        <div className="logo ">
   
            <img className="h-8 " src="https://i.ibb.co/98pHdFq/2021-10-27-15h51-15.png" alt="" />
       </div>
          {/* search */}
       
         <Search/>
          {/* buttons */}
          <nav className="icons">
           <div className='iconN'>
               <PersonOutlineIcon/>
               </div>
               <div className='iconN'>
              <FavoriteBorderIcon/>
              </div>
              {/* <div className='iconN'>
              <Link to='/pannier'>
                <LocalGroceryStoreIcon/>
                </Link> 
             </div> */}
          </nav>
    
    </div>
  )
}

export default Navbar
