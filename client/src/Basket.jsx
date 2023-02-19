import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Basket = (props) => {
  const [product, setProduct] = useState([]);
  const [basket, setBasket] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Fetch products from API and set them to state
    axios
      .get('/api/product/getAllp')
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addProductToBasket = (product) => {
    // Add a product to the basket
    setBasket([...basket, product]);
  };

  const removeProductFromBasket = (productId) => {
    // Remove a product from the basket
    setBasket(basket.filter((product) => product.id !== productId));
  };

  const calculateTotalPrice = () => {
    // Calculate the total price of all products in the basket
    const totalPrice = basket.reduce((acc, product) => {
      return acc + product.price;
    }, 0);
    setTotalPrice(totalPrice);
  };

  useEffect(() => {
    // Recalculate total price whenever the basket changes
    calculateTotalPrice();
  }, [basket]);

  return (
    <div>
      <div className="CartContainer">
        <div className="Header">
          <h3 className="Heading">Shopping Cart</h3>
        </div>
        {product.map((product) => (
          <div key={product.id} className="Cart-Items">
            <div className="image-box">
              <img className="fraise" src={product.image} alt={product.name} />
            </div>
            <div className="about">
              <h1 className="title">{product.name}</h1>
              <h3 className="desc">{product.description}</h3>
            </div>
            <div className="prices">
              <div className="amount">{product.price}</div>
              <div className="remove" onClick={() => removeProductFromBasket(product.id)}>
                <u>Remove</u>
              </div>
              <button onClick={() => addProductToBasket(product)}>+</button>
              <button>-</button>
            </div>
          </div>
        ))}
        <div className="checkout">
          <div className="total">
            <div>
              <div className="Subtotal">Sub-Total</div>
            </div>
            <div className="total-amount">{totalPrice}</div>
          </div>
          <button className="buttoni">Commander</button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
