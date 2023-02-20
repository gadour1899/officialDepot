
import React,{useState} from "react";  
import axios from "axios";

const Popup = props => {
    console.log("props",props.product);

const [name,setName]=useState(""); // state for the updated Name
const [price,setPrice]=useState(0);//state for the updated Price
const [description,setDescription]=useState("");//state for the updated Description
const [category,setCategory]=useState(""); // state for the updated Category
const [quantity,setQuantity]=useState(0); // state for the updated Quantity
const [image,setImage]=useState(""); // state for the updated Image

const onChangeName=e=>{
    e.preventDefault();
    setName(e.target.value)
}
const onChangePrice=e=>{
    e.preventDefault();
    setPrice(e.target.value)
}
const onChangeDescription=e=>{
    e.preventDefault();
   setDescription(e.target.value)
}
const onChangeCategory=e=>{
    e.preventDefault();
    setCategory(e.target.value)
};
const onChangeQuantity=e=>{
    e.preventDefault();
    setQuantity(e.target.value)
};

const handleImage =e=>{
    e.preventDefault();
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
      
        "name":name,
        "price":price,
        "image":image,
        "description":description,
        "category":category,
        "quantity":quantity,
      
    }
  let id= props.product.id

    axios.put(`api/product/updatep/${id}`, data)
    .then(response=> console.log(response))
    .catch(err=> console.log(err))
  // window.location.reload(false);
  
    }




  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose} >x</span>
        <form onSubmit={submitForm}>
              <input type="text" name="name" onChange={onChangeName} placeholder="Product Name" defaultValue={props.product.name} />
              <input type="number" name="price" onChange={onChangePrice} placeholder="Price DNT" defaultValue={props.product.price} />
              <input type="text" name="description"onChange={onChangeDescription} placeholder="Description" defaultValue={props.product.description}/>
              <input type="text" name="category" onChange={onChangeCategory} placeholder="Category" defaultValue={props.product.category} />
              <input type="number" name="quantity" onChange={onChangeQuantity} placeholder="Quantity"  defaultValue={props.product.quantity}  />
              <input type="file" name="image" placeholder="Image" onChange={handleImage}/>

              
             </form>
             <button type="submit"  onClick={submitForm}>Save</button>
      </div>
    </div>
  );
};

export default Popup;
