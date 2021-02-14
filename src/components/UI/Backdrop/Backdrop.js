import React from 'react';
import './Backdrop.css';
const backdrop=(props)=>{
    return (
        <div className={["backdrop",props.open ? " open" : ''].join('')} onClick={props.clicked} ></div>
    )
};
export default backdrop;
