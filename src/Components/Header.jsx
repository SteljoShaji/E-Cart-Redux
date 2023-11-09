import React from 'react'
import { Link } from 'react-router-dom'
import Cart from '../Pages/Cart'
import { useSelector } from 'react-redux'

function Header() {
    const Wishlist = useSelector((state)=>state.wishlistReducer)
    const Cart = useSelector((state)=>state.cartReducer)
  return (
    <nav style={{zIndex:'1'}} className="navbar navbar-expand-lg navbar-dark bg-black position-fixed w-100 top-0">
    <div className="container px-4 px-lg-5">
        <Link to={'/'} className="navbar-brand text-light fw-bolder "><i className="fa-solid fa-cart-shopping fa-bounce me-2"></i>E-Cart</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form className="d-flex ms-auto">
            <Link to={'/Wishlist'} className="btn btn-outline-light d-flex align-items-center" type="submit">
                    <i className="fa-solid fa-heart text-danger me-1"></i>
                   Wishlist
                    <span className="badge bg-dark text-white ms-1 rounded-pill">{Wishlist?.length}</span>
                </Link>
                <Link to={'/Cart'} className="btn btn-outline-light ms-4 d-flex align-items-center" type="submit">
                    <i className="fa-solid fa-cart-plus me-1"></i>
                    Cart
                    <span className="badge bg-dark text-white ms-1 rounded-pill">{Cart?.length}</span>
                </Link>
            </form>
        </div>
    </div>
</nav>
  )
}

export default Header