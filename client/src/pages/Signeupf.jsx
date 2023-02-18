import React, { useState } from 'react'
import axios from 'axios'
const Signeupf = () => {
const[name,setname]=useState("")
const [manger,setmanger]=useState("")
const [email,setemail]=useState("")
const [password,setpassword]=useState("")
const [adresse,setadresse]=useState("")
const[image,setImage]=useState("")


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
const submitForm=(e)=>{
  e.preventDefault();
  let data={
    CompanyName: name,
    manager:manger,
    email:email,
    password:password,
    image:image,
    adress: adresse,
  }

  axios.post('api/fournisseur/addf', data)
  .then(response=> console.log(response))
  .catch(err=> console.log(err))


  }
 


  return (
    <div>
        <form id='form' onSubmit={submitForm}>
        <input type="file" 
        name='image'
        placeholder='image'
        onChange={handleImage}/><br/>
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
            <button  id='button' onClick={submitForm}>add here </button>
    </div>
  )
}

export default Signeupf