import React from 'react';
import {Link} from 'react-router-dom';
import './Logo.css';
const logo = (props)=>{
    return (
        <div className="logo">
            <Link to={'/'}>
            <p>Organic</p>
            </Link>
        </div>
    );
}
export default logo;