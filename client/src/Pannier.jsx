
import React, { useState } from 'react';

const Pannier = () => {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const handleBuy = () => {
    setProductName(productName);
    setQuantity(quantity);
    setPrice(price);
  }

  const handleDelete = () => {
    setProductName('');
    setQuantity(0);
    setPrice(0);
  }

  const calculatePrice = () => {
    setPrice(quantity * price);
  }

  return (
    <div>
      <input type="text" placeholder="Product Name" onChange={e => setProductName(e.target.value)} style={{marginBottom: '1rem'}} />
      <input type="number" placeholder="Quantity" onChange={e => setQuantity(e.target.value)} style={{marginBottom: '1rem'}} />
      <input type="number" placeholder="Price" onChange={e => setPrice(e.target.value)} style={{marginBottom: '1rem'}} />
      <button onClick={handleBuy} style={{backgroundColor: '#00cc99', color: 'white', padding: '1rem', marginRight: '1rem'}}>Buy</button>
      <button onClick={handleDelete} style={{backgroundColor: '#cc0000', color: 'white', padding: '1rem', marginRight: '1rem'}}>Delete</button>
      <button onClick={calculatePrice} style={{backgroundColor: '#0099ff', color: 'white', padding: '1rem'}}>Calculate Price</button>
    </div>
  );
};

export default Pannier;