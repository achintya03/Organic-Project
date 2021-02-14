import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './SideBar.css';
const sideBar = (props)=>{

 return(
    <div className={['sideBar',props.open? ' open':''].join('')}>
        <Link to ='/' onClick={props.clicked}>Home</Link>
        <Link to={'/cart'} onClick={props.clicked}>Your Cart</Link>
        <Link onClick={props.clicked}>Login</Link>
        <Link onClick={props.clicked}>SignUp</Link>
    </div>
 )
}
export default sideBar;