import React from 'react';
import Button from '../UI/Button/Button';
import {Link} from 'react-router-dom';
import './Card.css';
const card = (props)=>{
    // console.log(props)
    return(
        <div className="card">
            <div className="card-body">
                <div className="card-img-container">
                    <img className="card-img" src={props.image} alt="Product Image"/>
                </div>
                <div className="card-content">
                    <h3 className="card-title">{props.title}</h3>
                    <h4 className="tagline">
                        {props.tagline}
                    </h4>
                    <p>
                        {props.ph} ph &nbsp; {props.volume} lts &nbsp;
                    </p>
                    <p>
                    First Brewed :&nbsp;{props.first_brewed}
                    </p>
                    <div className="card-price">
                        <p>Price&nbsp;:&nbsp; $100 </p>
                        <Link to={'/'+props.id}><Button  id="moreInfo" >More Info</Button></Link> &nbsp;
                        <Button id="addToCart" clicked={()=>props.addedCart(props.id)}>Add to Cart</Button> 
                    </div>
                </div>
                
            <div>

            </div>
            </div>
        </div>
    )
}
export default card;