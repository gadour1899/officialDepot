import React, { useState } from 'react'
import axios from 'axios'
const Signeupf = () => {
const[name,setname]=useState("")
const [manger,setmanger]=useState("")
const [email,setemail]=useState("")
const [password,setpassword]=useState("")
const [adresse,setadresse]=useState("")
const[image,setimage]=useState("")



const handeladd=()=>{
  axios.post("http://localhost:3000/api/fournisseur/addf",{
    CompanyName: name,
    manager:manger,
    email:email,
    password:password,
    image:image,
    adress: adresse,
  })
  .then((result)=>{console.log(result)})
  .catch((err)=>{console.log(err)})
}



  return (
    <div>
        <form id='form'>
        <input type="file" 
        name='image'
        placeholder='image'
        onChange={(e)=>{setimage(e.target.value)}}/><br/>
                    <input type="text" 
                     name='companyName'
                     placeholder='companyName'
                 onChange={(e)=>{setname(e.target.value),console.log(e.target.value)}}/><br />
                 <input type="text" 
                   name='manger'
                 placeholder='manger'
                 onChange={(e)=>{setmanger(e.target.value)}}/><br />
                 <input type="text" 
                name='email'
                 placeholder='email'
                 onChange={(e)=>{setemail(e.target.value)}}/><br />
                 <input type="text" 
                 name='password'
                 placeholder='password'
                 onChange={(e)=>{setpassword(e.target.value)}}/><br/>
                 <input type="text"
                 name='adresse' 
                 placeholder='adresse'
                 onChange={(e)=>{setadresse(e.target.value)}}/><br/>
                 
        </form>
            <button  id='button' onClick={()=>{handeladd()}}>add here </button>
    </div>
  )
}

export default Signeupf