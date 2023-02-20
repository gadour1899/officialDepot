import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Signeupf = () => {


const[name,setname]=useState("")
const [manger,setmanger]=useState("")
const [email,setemail]=useState("")
const [password,setpassword]=useState("")
const [adresse,setadresse]=useState("")
const[image,setImage]=useState("")
const[phonen,setphonen]=useState("")
const [redirect , setRedirect]=useState(false)
const navigate=useNavigate()

const handleImage =e=>{
  const file= e.target.files[0];
  setFileToBase(file)
  console.log(file)
}

const setFileToBase=file=>{
  const reader= new FileReader();
  reader.readAsDataURL(file)
  reader.onload= ()=>{
      setImage(reader.result)
  }
};

const handeladd=()=>{
  axios.post("http://localhost:3000/api/fournisseur/signup",{
    CompanyName: name,
    manager:manger,
    email:email,
    password:password,
    image:image,
    adress: adresse,
    phoneNumber:phonen
  }
  )
  .then((result)=>{console.log(result)
  navigate("/loginf")})
  .catch((err)=>{console.log(err)})
  navigate("/loginf")
  setRedirect(true)
}





  return (
  <div className="login">
      <div className="bg-img">
        <form action="/action_page.php" className="contenup">
          <h2> Sign Up</h2>
          <label htmlFor="psw">
            <b><i class="fa fa-home" aria-hidden="true"></i> Company Name</b>
          </label>
          <input
            type="text"
            placeholder="Company Name"
            name="psw"
            onChange={(e)=>{setname(e.target.value),console.log(e.target.value)}}/>
            <label htmlFor="psw">
            <b><i class="fa fa-user" aria-hidden="true"></i> Manager Name</b>
          </label>
          <input
            type="text"
            placeholder="Manager Name"
            name="psw"
            onChange={(e)=>{setmanger(e.target.value)}}/>
          <label htmlFor="email">
            <b><i class="fa fa-envelope" aria-hidden="true"></i> Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            onChange={(e)=>{setemail(e.target.value)}} />
          <label htmlFor="psw">
            <b><i class="fa fa-key" aria-hidden="true"></i> Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            onChange={(e)=>{setpassword(e.target.value)}}/>
            <label htmlFor="psw">
            <b><i class="fa fa-map-marker" aria-hidden="true"></i> Adress</b>
          </label>
          <input
            type="text"
            placeholder="Enter Adress"
            name="psw"
            onChange={(e)=>{setadresse(e.target.value)}}/>
            <label htmlFor="psw">
            <b> Profile Image</b>
          </label>
          <input className='file'
            type="file" 
            placeholder='image'
            name='image'
            onChange={handleImage}/>
          <button type="submit" className="beetn" 
          onClick={handeladd}> <p onClick={()=>navigate("/loginf")}>
           Submit </p>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signeupf

