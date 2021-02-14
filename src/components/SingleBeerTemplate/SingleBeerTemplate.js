import React from 'react';
import './SingleBeerTemplate.css';
const template = props =>{    
    return (
        <div className="template">
            <div className="template-img-container">
                <img className="template-img" src={props.beer.image_url}></img>
            </div>
            <div className="template-content">
                <h2 className="template-heading">{props.beer.name}</h2>
                <h3 className="template-tagline">{props.beer.tagline}</h3>
                {/* <p className="template-price">Price&nbsp;:&nbsp; $100 </p> */}
                <p>
                    {props.beer.ph} ph&nbsp; First Brewed :&nbsp;{props.beer.first_brewed}
                </p>
                <p className="template-description">{props.beer.description}</p>
                <p>
                Abv :&nbsp;{props.beer.abv}&nbsp; Ibu :&nbsp;{props.beer.ibu}&nbsp; Ebc :&nbsp;{props.beer.ebc}&nbsp; Srm :&nbsp;{props.beer.srm}
                </p>
                <p>
                    Attenuation :&nbsp;{props.beer.attenuation_level}&nbsp;
                </p>
            </div>
            <div className="template-buttons">
                <h3 className="template-price">Price : $100</h3>
                <h3 className="template-cartBtn" onClick={()=>props.addedCart(props.beer.id)}>Add to Cart</h3>
            </div>
        
        </div>
    )
}
export default template;