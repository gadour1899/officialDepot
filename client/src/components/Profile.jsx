import React from 'react'
import DoneAllIcon from '@mui/icons-material/DoneAll';

const Profile = () => {
  return (
    <div className='user'>
      <div className="card">
       <DoneAllIcon sx={{
            height: "20px",
            width: "20px",
           }}/>
  <p className="title">Order Validated </p>
  <p className='title'>Check Your Email</p>
  <a href="#"> <i className="fa fa-dribbble">  </i>  </a>
  <a href="#"> <i className="fa fa-twitter">  </i></a>
  <a href="#"> <i className="fa fa-linkedin">  </i></a>
  <a href="#"> <i className="fa fa-facebook">  </i></a>
  <p id="phone" > <i className="fa fa-phone-square" aria-hidden="true"> </i> Thank you ! </p> 
</div>
    </div>
  )
}

export default Profile
