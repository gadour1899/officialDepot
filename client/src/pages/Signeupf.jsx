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
  }
  )
  .then((result)=>{console.log(result)
  navigate("/loginf")})
  .catch((err)=>{console.log(err)})
  setRedirect(true)
}





  return (
  // <div>
  //       <form id='signeF'>
  //       <input type="file" 
  //       name='image'
  //       placeholder='image'
  //       onChange={handleImage}/><br/>
  //                   <input type="text" 
  //                    name='companyName'
  //                    placeholder='companyName'
  //                onChange={(e)=>{setname(e.target.value),console.log(e.target.value)}}/><br />
  //                <input type="text" 
  //                  name='manger'
  //                placeholder='manger'
  //                onChange={(e)=>{setmanger(e.target.value)}}/><br />
  //                <input type="email" 
  //               name='email'
  //                placeholder='email'
  //                onChange={(e)=>{setemail(e.target.value)}}/><br />
  //                <input type="password" 
  //                name='password'
  //                placeholder='password'
  //                onChange={(e)=>{setpassword(e.target.value)}}/><br/>
  //                <input type="adresse"
  //                name='adresse' 
  //                placeholder='adresse'
  //                onChange={(e)=>{setadresse(e.target.value)}}/><br/>
                  

                 


            
        
  //       <p onClick={()=>navigate("/loginf")}><button  id='butF' onClick={handeladd}>add here </button></p>
  //   </div>
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
            <b>Profile Image</b>
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

