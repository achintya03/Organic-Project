import React, {Fragment, useState} from 'react';
import Logo from '../UI/Logo/Logo';
import MobileToggle from '../UI/MobileToggle/MobileToggle';
import NavBar from './NavBar/NavBar';
import './Layout.css';

const layout = (props)=>{
    return (
        <div className='layout'>
            <Logo/>
            <div className="spacer"></div>
            <MobileToggle clicked={props.toggle}/>
            <NavBar/>
        </div>
    ) 
};
export default layout;

