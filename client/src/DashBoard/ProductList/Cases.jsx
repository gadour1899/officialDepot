import React,{useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const Cases = (props) => {


 const [name,setName]=useState("");
 const [price,setPrice]=useState(0);
 const [description,setDescription]=useState("");
 const [category,setCategory]=useState("");
 const [quantity,setQuantity]=useState(0);
 const [image,setImage]=useState("");

 const navigate = useNavigate();



const handleChangeName=e=>{

  console.log(e.target.value);
  setName(e.target.value);
};

const handleChangePrice=e=>{

  console.log(e.target.value);

  setPrice(e.target.value);
};

 const handleChangeDescription=e=>{

  console.log(e.target.value);

  setDescription(e.target.value);
};

const handleChangeCategory=e=>{

  console.log(e.target.value);

  setCategory(e.target.value);
};

const handleChangeQuantity=e=>{

  console.log(e.target.value);

  setQuantity(e.target.value);
};


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
e.preventDefault()
  let data={
    
      "name":name,
      "price":price,
      "image":image,
      "description":description,
      "category":category,
      "quantity":quantity,
      "fournisseurId":props.id,
    
  }

  axios.post('api/product/addp', data)
  .then(response=> {console.log(response)
 })
  .catch(err=> console.log(err))


  }
 


  return (
 <div className='popup-box'>
  <div className='box'>
     <span className='close-icon' onClick={props.closePop}>x</span>
<form onSubmit={()=>submitForm(e)}>
<input type="text" name="name" onChange={handleChangeName} placeholder='Product Name' />
<input type="number" name="price" onChange={handleChangePrice}  placeholder='Product Price in DTN ' />
<input type="text" name="description" onChange={handleChangeDescription} placeholder='Product Description ' />
<input type="text" name="category"   onChange={handleChangeCategory} placeholder='Product Category ' />
<input type="number" name="quantity" onChange={handleChangeQuantity} placeholder='Product quantity ' />
<input type="file" name="image" onChange={handleImage} placeholder='Product Image ..?' />
<button onClick={submitForm}  className="beetn" ><p >Create</p></button>
</form>
</div>
</div>
  )
}

export default Cases;