import React from 'react';
import {Link} from 'react-router-dom';
import image from '../../../images/cart.png';
import './NavBar.css';
const navBar = props=>{
    return(
        <div className="navBar">
            <Link to='/'>Home</Link>
            <Link to={'/cart'} class="cart-icon" >
                <span class="line-2 " style={{display: "flex"}}>
                    <img src={image}/>
                    <p>Cart</p>
                </span>
            </Link>
            <Link href="#">Login</Link>
            <Link href="#">SignUp</Link>
        </div>
    )
}
export default navBar;