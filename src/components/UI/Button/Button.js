import React from 'react';
import './Button.css';
const button = props=>{
    return (
        <button id={props.id} onClick={props.clicked} className="btn">{props.children}</button>
    )
}
export default button;