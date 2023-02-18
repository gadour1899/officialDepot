import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function ProductDetails() {
  const [quantity,setQuantity] =useState(20)

  const increment=()=>{
    setQuantity(quantity+20)
  }
  const decrement=()=>{
    setQuantity(quantity-20)
  }

  return (
    <div>
      <div id="contain">
        <div className="product-details">
          <h1>Mineral Water</h1>
          <span className="hint-star star">
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star-o" aria-hidden="true" /> 
          </span>
          <p className="information">TIJENE</p>
          <span > <b> Quantity : {quantity} </b><button onClick={increment}>+</button> <button onClick={decrement}>-</button></span>
          <div className="control">
            <button className="btnnn">
              <span className="price">12 DNT</span>
              <span className="shopping-cart">
                <i className="fa fa-shopping-cart" aria-hidden="true" />
              </span>
              <span className="buy">Ajouter au panier</span>
            </button>
          </div>
        </div>
        <div className="product-image">
          <img src="https://www.talos.tn/30065-large_default/pack-de-12-bouteille-d-eau-tijen-05l.jpg" alt="" />
          <div className="info">
            <h2> Description</h2>
            <ul className="deslis">
              <li>
                <strong>Brand :</strong>TIJENE{' '}
              </li>
              <li>
                <strong>Volume: </strong>1.5L
              </li>
              <li>
                <strong>Decoration: </strong>balls and bells
              </li>
              <li>
                <strong>Material: </strong>PLASTIC
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductDetails
