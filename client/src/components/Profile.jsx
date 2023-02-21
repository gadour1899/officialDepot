import React , {useState , useEffect} from 'react'
import axios from 'axios';
import DoneAllIcon from '@mui/icons-material/DoneAll';

const Profile = (props) => {

  const [user,setUser]=useState('')
    const config = {
        headers:{
          jwt: document.cookie.slice(4)
        }
      };
    useEffect(()=>{
        axios.get("http://localhost:3000/api/user/token",config)
          .then(res=>{
                  setUser(res.data)
                  console.log("current user",res.data)
              })
          .catch(err=>{
                  console.log(err)
              })
    },[])

  return (
    <div className='user'>
      <div className="card">
       <DoneAllIcon sx={{
            height: "20px",
            width: "20px",
           }}/>
  <p className="title">Order Validated  </p>
  <p className='title'>Check Your Email {user.email}</p>
  <a href="#"> <i className="fa fa-dribbble">  </i>  </a>
  <a href="#"> <i className="fa fa-twitter">  </i></a>
  <a href="#"> <i className="fa fa-linkedin">  </i></a>
  <a href="#"> <i className="fa fa-facebook">  </i></a>
  <p id="phone" > <i className="fa fa-phone-square" aria-hidden="true"> </i> Thank you {user.name} ! </p> 
</div>
    </div>
  )
}

export default Profile
