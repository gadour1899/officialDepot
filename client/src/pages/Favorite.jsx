import React from 'react'

function Favorite(props) {

  return (
    <div>
      <h2>My Wishlist  <span className="wish-icon"><i className="fa fa-heart-o" /></span></h2>
       <div className="item active">
                  <div className="row">
                  {props.wish.map((product, index) => ( 
                    <div key={index} className="col-sm-3">
                      <div className="thumb-wrapper">
                        <div className="img-box">
                          <img src={product.image} className="img-responsive" alt="" />									
                        </div>
                        <div className="thumb-content">
                          <h4>{product.name}</h4>									
                          <p className="item-price"> {product.quantity} <b>{product.price} DNT</b></p>
                          <Link to="/product" ><a onClick ={()=>{props.setSingleProduct(product)
                              }} href="#" className="btn btn-primary">More Details</a> </Link> 
                        </div>		
                      </div> 
                    </div> ))}
                  </div> 
                </div>  
                 
                </div> 
        
  )
}

export default Favorite
