import React, { useState } from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import Basket from '../Basket.jsx';

function  ProductDetails(props) {
  
  const navigate = useNavigate()
  console.log("product DETAILS",props);
  const [quantity, setQuantity] = useState(props.data.quantity);
  const [show, setShow] = useState(false);

  const increment = () => {
    setQuantity(quantity + 20);
  };

  const decrement = () => {
    setQuantity(quantity - 20);
  };

  const addProductToBasket = (item) => {
    props.setBasket([...props.basket, item]);
  };

  function myFunction() {
    alert("Check your SHOPPING CART !");
  }

  return (
    <div>
      <div id="contain">
        <div className="product-details">
          <h1>{props.data.name}</h1>
          <span>
            <b>Quantity: {quantity}</b>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
          </span>
          <div className="control">
            <button className="btnnn" onClick={()=>{!false && < Basket setquantity={quantity} />} }>
              <span className="price">{props.data.price} DNT</span>
              <span className="shopping-cart">
                <i className="fa fa-shopping-cart" aria-hidden="true" />
              </span>
              <span onClick={myFunction}><button className="buy" onClick={()=>addProductToBasket(props.data)}>Add to basket</button></span>
            </button>
          </div>
        </div>
        <div className="product-image">
          <img src={props.data.image} alt="" />
          <div className="info">
            <ul className="deslis">
              <li>

                <h4>Brand: {props.data.category}</h4>
              </li>
              <li>

                <h4>More details: {props.data.description}</h4>
              </li>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
