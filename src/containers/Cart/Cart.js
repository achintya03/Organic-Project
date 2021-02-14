import React,{useState,useEffect} from 'react';
import CartItems from '../../components/CartItems/CartItems';
import './Cart.css';
const Cart=props=>{
   const items = props.cartItems.map(element => {
        return(
            <CartItems key ={element.id} id={element.id} name={element.name} price={element.price} image={element.image_url} quantity={element.quantity} incQty={()=>props.incQty(element.id)} decQty={ ()=>props.decQty(element.id)}/>
        )
    }); 
    return(
        <div className="cart">
            <h1 className="cart-heading">Your Cart</h1>
            {props.cartItems.length<=0 &&<h1 className="cart-heading">Is Empty !!</h1>}
            <div className="cart-container">
                {items}
            </div>
            {props.cartItems.length>0 && <div className="cart-total">
                <strong>Total Price :&nbsp; ${props.total}</strong>
            </div>  }

        </div>
    )
}
export default Cart;