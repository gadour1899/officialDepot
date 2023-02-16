import React, {useEffect,useState} from 'react'
import axios from 'axios'


function ImageTest() {
 const [image,setImage]=useState('');

// handle image and convert it to base 64
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


 // submit the form 
 const submitForm = async (e) => {
    e.preventDefault();
    let data = {
        image : image
    }

    axios.post('api/fournisseur/addf', data)
    .then(response=> console.log(response))
    .catch(err=> console.log(err))
 }




  return (
    <form onSubmit={submitForm} >
<input type="file" name='image ' onChange={handleImage}/>
 <button type="submit"  >Upload</button>
    </form>
  )
}

export default ImageTest