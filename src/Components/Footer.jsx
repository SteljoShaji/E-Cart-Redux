import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div
    className="d-flex flex-column align-items-center justify-content-center bg-black"
    style={{ width: "100%", height: "300px" }}>
    <div className="footer d-flex justify-content-evenly w-100">
      <div style={{width:'400px'}} className="website ">
        <h4 style={{color:'white'}}> 
        <i class="fa-solid fa-cart-shopping fa-bounce me-1 "></i> E-Cart
        </h4>
        <h6 style={{color:'white'}}>
          Designed and built with all the love in the world by the React
          team with the help of our contributors.
        </h6>
        <h6 style={{color:'white'}}>Code licensed MIT, docs CC BY 3.0.</h6>
        <p style={{color:'white'}}>Currently v5.3.2.</p>
      </div>
      <div className="links d-flex flex-column">
        <h4 style={{color:'white'}}>Links</h4>
        <Link to={'/'} style={{textDecoration:'none',color:'white'}}> Cart </Link>
        <Link to={'/cart'} style={{textDecoration:'none',color:'white'}}> Home  </Link>
        <Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}> WishList </Link>

      </div>
      
      <div className="guides d-flex flex-column">
        <h4 style={{color:'white'}}>Guides</h4>
        <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'white'}}> React </Link>
        <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white'}}> React Bootstrap  </Link>
        <Link to={'https://redux.js.org/'} style={{textDecoration:'none',color:'white'}}> Redux </Link>

      </div>
      <div className="contact ">
          <h4 style={{color:'white'}}>Contact Us</h4>
          <div className="sub d-flex mt-3" >
            <input type="text" className="form-control"  placeholder='Enter your Email Id'/>
            <button className='btn btn-dark ms-2  ' ><i class="fa-solid fa-arrow-right fa-beat"></i></button>
          </div>
          <div className="icons fs-4 d-flex justify-content-between mt-3">
          <Link to={'https://getbootstrap.com/'} style={{ textDecoration: "none", color: "white" }}><i className="fa-solid fa-envelope"></i></Link>
          <Link to={'https://getbootstrap.com/'} style={{ textDecoration: "none", color: "white" }}><i className="fa-brands fa-twitter"></i> </Link>
          <Link to={'https://getbootstrap.com/'} style={{ textDecoration: "none", color: "white" }}><i className="fa-brands fa-linkedin"></i></Link>
          <Link to={'https://getbootstrap.com/'} style={{ textDecoration: "none", color: "white" }}><i class="fa-brands fa-instagram"></i></Link>
          <Link to={'https://getbootstrap.com/'} style={{ textDecoration: "none", color: "white" }}><i className="fa-brands fa-github"></i></Link>
          <Link to={'https://getbootstrap.com/'} style={{ textDecoration: "none", color: "white" }}><i class="fa-brands fa-facebook"></i></Link>
          </div>
        </div>
    </div>

    <p style={{color:'white'}}>Copyright © 2023 E-Cart. Built with React.</p>
  </div>
);
}



export default Footer