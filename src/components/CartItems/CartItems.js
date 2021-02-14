import React from 'react';
import './CartItems.css';
const cartItems= props=>{
    // console.log(props.name)
    return (
        <div className="cartItem">
            <div className="cart-img-container">
                <img className="cart-img" src={props.image} alt="Product Image"/>
            </div>
            <div className="cart-content">
                <h3 className="cart-title">{props.name}</h3>
                <div className="cart-price">
                     <p><strong>Price</strong>&nbsp;:&nbsp; ${props.price} </p>
                </div>
                <div className="cart-price">
                     <p><strong>Quantity</strong>&nbsp;:&nbsp; {props.quantity} </p>
                </div>
                <div>
                <button onClick={()=>props.incQty(props.id)}>+</button><button onClick={()=>props.decQty(props.id)}>-</button>
                </div>
                
            </div>
        </div>
        
    )
}
export default cartItems;