import React from 'react'
import { useNavigate } from 'react-router-dom'


function Favorite(props) {

  console.log("favorite props",props);
  const navigate=useNavigate()

  return (
    <div>
      <h2>My Wishlist  <span className="wish-icon"><i className="fa fa-heart-o" /></span></h2>
      <div  className="container"> 
      
      <div className="row">
          <div className="col-md-12">
       <div className="item active">
                  <div className="row">
                  {props.items.map((product, index) => ( 
                    <div key={index} className="col-sm-3">
                      <div className="thumb-wrapper">
                        <div className="img-box">
                          <img src={product.image} className="img-responsive" alt="" />									
                        </div>
                        <div className="thumb-content">
                          <h4>{product.name}</h4>									
                          <p className="item-price"  > {product.quantity} <b>{product.price} DNT</b></p>
                         <a  href="#" className="btn btn-primary" onClick={() => navigate("/product")}>More Details</a> 
                        </div>		
                      </div> 
                    </div> ))}
                  </div> 
                </div> 
                </div>  
                </div> 
                </div>    
                </div> 
        
  )
}

export default Favorite
