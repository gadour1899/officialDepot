import React, {useEffect,useState} from 'react';
import axios from 'axios';
import Cases from './Cases.jsx';
import PopOutUpdate from './PopOutUpdate.jsx';


const ProductList = () => {
    const [products,setProducts]=useState([])
    const [change,setChange]=useState(false); 
    const [openForm,setOpenForm]=useState(false); // to open creating update form
    const [openFormUpdate,setOpenFormUpdate]=useState(false);// to open updating update form
    const [id,setId]=useState(0)
   
    // const [name,setName]=useState("")
    // const [price,setPrice]=useState(0)
    // const [image,setImage]=useState("")
    // const [description,setDescription]=useState("")
    // const [category,setCategory]=useState("")
    // const [quantity,setQuantity]=useState("")


// fetching data
 useEffect(() => {
    axios.get('/api/product/getAllp')
    .then(result=>{console.log(result)
    setProducts(result.data)})
    .catch(err=>console.log(err))
  }, [change])

const togglePopup =() => {
setOpenFormUpdate(!openFormUpdate)
}


  //onclick open create product inputs 
  const onClick =() => {
setOpenForm(!openForm)   
  setChange(!change);
}

  
 
// // Add new products 
// const onClickCreate =()=>{
// axios.post('http://localhost:3030/api/product/addp',{
//     "name":name,
//     "price":price,
//     "description":description,
//     "image":image,
//     "category":category,
//     "quantity":quantity,
// })
// .then(res=>{
//   console.log(res)
// }).catch(err=>{console.log(err)})
// setChange(!change)
// }

// handle the onclick event to delete product

const onDelete =(product) => {
    let id=product;
    console.log(id);
    axios.delete(`/api/product/deletep/${id}`)
    .then(response => console.log("product deleted"))
    .catch(error => console.log(error))
    setChange(!change);
}
  return (
    <div>

<button onClick={()=>onClick()} >Create a new product</button>
{openForm && <Cases change={change} setChange={setChange}/>}


    <table id="customers">
      <thead>
        <tr>
        <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Category</th>
          <th>Quantity</th>
     
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
        
          <tr key={index}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price} TND</td>
            <td>{product.description}</td>
            <td>{product.category}</td>
            <td>{product.quantity}</td>
            <button  class="editbutton"  onClick={togglePopup} >Edit</button>
            {openFormUpdate && <PopOutUpdate  handleClose={togglePopup}/>}
            <button  onClick={()=>onDelete(product.id)}class="deletebutton">Delete</button>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default ProductList;