import React,{useEffect,useState} from 'react'
// import Card from '../../components/Card/Card';
import Loader from '../../components/UI/Loader/Loader';
import SingleBeerTemplate from '../../components/SingleBeerTemplate/SingleBeerTemplate';
const SingleBeer=props=>{
    const [beer,setBeer] = useState({});
    console.log(props);
    useEffect(()=>{
        fetch('https://api.punkapi.com/v2/beers/'+ props.match.params.beerId,
        {
            method:'get',
            mode: 'cors',
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Access-Control-Allow-Origin':'*'    
             }
           
          })
          .then(function(response){
              return response.json()
          })
          .then(function(beer){
              console.log(beer[0])
              setBeer(beer[0]);
        }).catch(err=>console.log(err))
    },[])
    let card = <Loader/>;
    card = beer && (<SingleBeerTemplate
        beer={beer}
        addedCart={props.addedToCart}/>);
        // console.log(card);
    return (
        <div className="singleBeer">
            {card}
        </div>
    )
}
export default SingleBeer;