import React,{useState} from 'react'

const Basket = () => {
    const [basket, setBasket] = useState([]);

    const removeProductFromBasket = (productId) => {
        setBasket(
          basket.filter(product => product.id !== productId)
        );
      }
      
      const getTotalPrice = () => {
        return basket.reduce((acc, product) => {
          return acc + product.price * product.quantity;
        }, 0);
      }
      
  return (

    
    <div>
          <div className="CartContainer">
    <div className="Header">
     <h3 className="Heading">Shopping Carts</h3>
    </div>
    <div className="Cart-Items">
       <div className="image-box">
        
         <img className='fraise' src="https://www.saida-group.com/interface/catalog/images/product/20150126115514_IM__1.jpg"  />
       </div>
       <div className="about">
         <h1 className="title"></h1>
         <h3 className="subtitle">144g</h3>
         <h3 className='desc'>Like a scene in a movie or a verse in a song, paragraphs are the building blocks of any good piece of writing.  </h3>
         <h3>{}</h3>
       </div>
       <div className="prices">
         <div className="amount">$2.99</div>
         <div className="remove"><u>Remove</u></div>
       </div>
    </div>
    <div className="Cart-Items-pad">
       <div className="image-box">
         <img  className='fraise' src="https://static.s-sfr.fr/media/catalogue/article/mobile/colfz342/iPhone-14_Noir_Front-Back_sides_400x540px.png" />
       </div>
       <div className="about">
         <h1 className="title">iPhone 14 noir</h1>
         <h3 className="subtitle">256Go</h3>
         <h3 className='desc'>Like a scene in a movie or a verse in a song, paragraphs are the building blocks of any good piece of writing.  </h3>            </div>
       <div className="prices">
         <div className="amount">$1059</div>
         <div className="remove"><u>Remove</u></div>
       </div>
       
    </div>

  <div className="checkout">
  <div className="total">
     <div>
         <div className="Subtotal">Sub-Total</div>
     </div>
     <div className="total-amount">$1061,99</div>
  </div>
  <button className="buttoni">Commander</button>
  </div>
</div>
</div>
  )
}

export default Basket