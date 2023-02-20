import React from 'react'
import $ from 'jquery';
import { Link } from 'react-router-dom';

function Electronic() {
   
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
                <h2>Electronic</h2>
                <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval={0}>
                  <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to={0} className="active" />
                    <li data-target="#myCarousel" data-slide-to={1} />
                    <li data-target="#myCarousel" data-slide-to={2} />
                  </ol>   
                  <div className="carousel-inner"> 
                    <div className="item active">
                      <div className="row">
                        <div className="col-sm-3">
                          <div className="thumb-wrapper">
                            <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                            <div className="img-box">
                              <img src="https://www.scoop.com.tn/37987-thickbox_default/pc-portable-gamer-msi-gf63-thin-11sc-028fr-i7-11%C3%A8me-16go-gtx-1650-156-fhd.jpg" className="img-responsive" alt="" />									
                            </div>
    
                            <div className="thumb-content">
                              <h4>Pc-Portable-Gamer-MSI</h4>									
          
                              <p className="item-price">20 pièces <b>2 999,00 DNT</b></p>
                              <Link to="/product" >  <a href="#" className="btn btn-primary">More Details</a> </Link>
                            </div>						
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="thumb-wrapper">
                            <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                            <div className="img-box">
                              <img src="https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/92/6166/1.jpg?9465" className="img-responsive" alt="" />									
                            </div>
    
                            <div className="thumb-content">
                              <h4>ROMIS Speaker Portable</h4>									
          
                              <p className="item-price">30 pièces <b>79.00 DNT</b></p>
                              <Link to="/product" >  <a href="#" className="btn btn-primary">More Details</a> </Link>
                            </div>						
                          </div>
                        </div>
                         <div className="col-sm-3">
                          <div className="thumb-wrapper">
                            <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                            <div className="img-box">
                              <img src="https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/07/6296/1.jpg?8374" className="img-responsive" alt="" />									
                            </div>
    
                            <div className="thumb-content">
                              <h4>Apple iPhone 14 Pro Max </h4>									
                              <p className="item-price">28 pièces <b>9,883.30 DNT</b></p>
                              <Link to="/product" >  <a href="#" className="btn btn-primary">More Details</a> </Link>
                            </div>						
                          </div>
                        </div>					
                        <div className="col-sm-3">
                          <div className="thumb-wrapper">
                            <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                            <div className="img-box">
                              <img src="https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/90/6776/1.jpg?8345" className="img-responsive" alt="" />									
                            </div>
    
                            <div className="thumb-content">
                              <h4>Lenovo TABLETTE TAB M8 HD</h4>									
                              <p className="item-price">32 pièces <b>479.00 DNT</b></p>
                              <Link to="/product" >  <a href="#" className="btn btn-primary">More Details</a> </Link>
                            </div>						
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="row">
                      <div className="col-sm-3">
                          <div className="thumb-wrapper">
                            <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                            <div className="img-box">
                              <img src="https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/80/6155/1.jpg?5352" className="img-responsive" alt="" />									
                            </div>
    
                            <div className="thumb-content">
                              <h4>Logicom Tablette Kids Logicom</h4>									
                              <p className="item-price">50 pièces <b>192.90 DNT</b></p>
                              <Link to="/product" >  <a href="#" className="btn btn-primary">More Details</a> </Link>
                            </div>						
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="thumb-wrapper">
                            <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                            <div className="img-box">
                              <img src="https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/07/6964/1.jpg?0175" className="img-responsive" alt="" />									
                            </div>
    
                            <div className="thumb-content">
                              <h4>REZ*MAY Smart Watch</h4>									
                              <p className="item-price">60 pièces <b>149.00DNT</b></p>
                              <Link to="/product" >  <a href="#" className="btn btn-primary">More Details</a> </Link>
                            </div>						
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="thumb-wrapper">
                            <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                            <div className="img-box">
                              <img src="https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/6696/1.jpg?3167" className="img-responsive" alt="" />									
                            </div>
    
                            <div className="thumb-content">
                              <h4>Casque Bluetooth Oreilles de Chat avec Lumière</h4>									
                              <p className="item-price">80 pièces <b>63.00 DNT</b></p>
                              <Link to="/product" >  <a href="#" className="btn btn-primary">More Details</a> </Link>
                            </div>						
                          </div>
                        </div>
                       <div className="col-sm-3">
                          <div className="thumb-wrapper">
                            <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                            <div className="img-box">
                              <img src="https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/77/3726/1.jpg?8888" className="img-responsive" alt="" />									
                            </div>
    
                            <div className="thumb-content">
                              <h4>Biolux TV SMART Android - 40''</h4>									
                              <p className="item-price">40 pièces <b>785.00 DNT</b></p>
                              <Link to="/product" >  <a href="#" className="btn btn-primary">More Details</a> </Link>
                            </div>						
                          </div>
                        </div>					
                      </div>
                    </div>
                    <div className="item">
                      <div className="row">
                        <div className="col-sm-3">
                          <div className="thumb-wrapper">
                            <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                            <div className="img-box">
                              <img src="https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/54/7733/1.jpg?8071" className="img-responsive" alt="" />
                            </div>
                            <div className="thumb-content">
                              <h4>Apple iPhone</h4>
                              <p className="item-price"><strike>$369.00</strike> <span>$349.00</span></p>
                              <div className="star-rating">
                                <ul className="list-inline">
                                  <li className="list-inline-item"><i className="fa fa-star" /></li>
                                  <li className="list-inline-item"><i className="fa fa-star" /></li>
                                  <li className="list-inline-item"><i className="fa fa-star" /></li>
                                  <li className="list-inline-item"><i className="fa fa-star" /></li>
                                  <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                              <a href="#" className="btn btn-primary">Add to Cart</a>
                            </div>						
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="thumb-wrapper">
                            <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                            <div className="img-box">
                              <img src="/examples/images/products/canon.jpg" className="img-responsive" alt="" />
                            </div>
                            <div className="thumb-content">
                              <h4>Canon DSLR</h4>
                              <p className="item-price"><strike>$315.00</strike> <span>$250.00</span></p>
                              <div className="star-rating">
                                <ul className="list-inline">
                                  <li className="list-inline-item"><i className="fa fa-star" /></li>
                                  <li className="list-inline-item"><i className="fa fa-star" /></li>
                                  <li className="list-inline-item"><i className="fa fa-star" /></li>
                                  <li className="list-inline-item"><i className="fa fa-star" /></li>
                                  <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                              <a href="#" className="btn btn-primary">Add to Cart</a>
                            </div>						
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="thumb-wrapper">
                            <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                            <div className="img-box">
                              <img src="/examples/images/products/pixel.jpg" className="img-responsive" alt="" />
                            </div>
                            <div className="thumb-content">
                              <h4>Google Pixel</h4>
                              <p className="item-price"><strike>$450.00</strike> <span>$418.00</span></p>
                              <div className="star-rating">
                                <ul className="list-inline">
                                  <li className="list-inline-item"><i className="fa fa-star" /></li>
                                  <li className="list-inline-item"><i className="fa fa-star" /></li>
                                  <li className="list-inline-item"><i className="fa fa-star" /></li>
                                  <li className="list-inline-item"><i className="fa fa-star" /></li>
                                  <li className="list-inline-item"><i className="fa fa-star-half-o" /></li>
                                </ul>
                              </div>
                              <a href="#" className="btn btn-primary">Add to Cart</a>
                            </div>						
                          </div>
                        </div>	
                        <div className="col-sm-3">
                          <div className="thumb-wrapper">
                            <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                            <div className="img-box">
                              <img src="/examples/images/products/watch.jpg" className="img-responsive" alt="" />
                            </div>
                            <div className="thumb-content">
                              <h4>Apple Watch</h4>
                              <p className="item-price"><strike>$350.00</strike> <span>$330.00</span></p>
                              <div className="star-rating">
                                <ul className="list-inline">
                                  <li className="list-inline-item"><i className="fa fa-star" /></li>
                                  <li className="list-inline-item"><i className="fa fa-star" /></li>
                                  <li className="list-inline-item"><i className="fa fa-star" /></li>
                                  <li className="list-inline-item"><i className="fa fa-star" /></li>
                                  <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                              <a href="#" className="btn btn-primary">Add to Cart</a>
                            </div>						
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Carousel controls */}
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
        
        </div>)
}

export default Electronic
