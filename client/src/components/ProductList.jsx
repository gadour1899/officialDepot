import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from './Card.jsx'

function ProductList() {
  
    const products=useSelector(
        (state)=>state.productReducer.products
    )
    const dispatch=useDispatch()
    const load=useSelector((state)=>state.productReducer.load)
    useEffect(()=>{
        dispatch(getAllProduct())
    },[dispatch])
    

  return (
    <div>
           <h1>Productlist</h1>
      {load ? (
        <h2>Loading...</h2>
      ) : (
        products.map((el) => <Card product={el} key={el._id} />)
      )}
    </div>
  )
}

export default ProductList
