import React from 'react'

function ProductDetails() {
  return (
    <div>
      <div id="contain">
        <div className="product-details">
          <h1>product name</h1>
          <span className="hint-star star">
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star-o" aria-hidden="true" />
          </span>
          <p className="information">image</p>
          <div className="control">
            <button className="btnnn">
              <span className="price">500</span>
              <span className="shopping-cart">
                <i className="fa fa-shopping-cart" aria-hidden="true" />
              </span>
              <span className="buy">Ajouter au panier</span>
            </button>
          </div>
        </div>
        <div className="product-image">
          <img src="" alt="" />
          <div className="info">
            <h2> Description</h2>
            <ul>
              <li>
                <strong>portabl </strong>5 Ft{' '}
              </li>
              <li>
                <strong>Shade : </strong>Olive green
              </li>
              <li>
                <strong>Decoration: </strong>balls and bells
              </li>
              <li>
                <strong>Material: </strong>Eco-Friendly
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
