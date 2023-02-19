import React , {useState,useEffect} from 'react'
import $ from 'jquery';
import { Link } from 'react-router-dom';


function Card(props) {



  console.log("card props ", props);
  $(document).ready(function(){
    $(".wish-icon i").click(function(){
        $(this).toggleClass("fa-heart fa-heart-o");
    });
});


  return (
    <div>
<div>
     <div className="container">
     
        <div className="row">
          <div className="col-md-12">
            <h2>company name</h2>
            <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval={0}>
              <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to={0} className="active" />
                <li data-target="#myCarousel" data-slide-to={1} />
                <li data-target="#myCarousel" data-slide-to={2} />
              </ol> 
              
              <div className="carousel-inner"> 
                <div className="item active">
                  <div className="row">
                  {props.data.map((product, index) => ( 
                    <div key={index} className="col-sm-3">
                      <div className="thumb-wrapper">
                        <span className="wish-icon"><i className="fa fa-heart-o" /></span>
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
              <a className="carousel-control left" href="#myCarousel" data-slide="prev">
                <i className="fa fa-angle-left" />
              </a>
              <a className="carousel-control right" href="#myCarousel" data-slide="next">
                <i className="fa fa-angle-right" />
              </a>
              </div> 
            </div>
          </div>
        </div> 
    </div>
    </div>
  )
}

export default Card
