import React,{useState,useEffect} from 'react';
import Card from '../../components/Card/Card';
import Paginator from '../../components/UI/Paginator/Paginator';
import Loader from '../../components/UI/Loader/Loader';
import {Link} from 'react-router-dom';
import './Pannel.css';
const Pannel =(props)=>{
    const [data,setData] = useState([]);
    const [postPage,setPostPage]=useState(1);
    const [totalPages,setTotalPages]=useState(25);
    const [per_page,setPerPage]=useState(9);
    useEffect(()=>{
        loadPosts();            
      },[])
      
    const loadPosts = direction => {
        
        let page = postPage;
        if (direction === 'next') {
          page++;
          setPostPage(page);
        }
        if (direction === 'previous') {
          page--;
          setPostPage(page);
        }
        fetch('https://api.punkapi.com/v2/beers?per_page='+per_page+'&page='+page ,{
            method:'get',
            mode: 'cors',
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Access-Control-Allow-Origin':'*'    
             }
           
          })
          .then(function(response){
            // console.log(response)
            return response.json();
         })
          .then(function(myJson) {
            // console.log(myJson)
            const beers = Object.values(myJson).map(beer=>{
              return {...beer}
            });
            // console.log(typeof beers);
            setData(beers);
          });
      };
    const cards = data.map(beer=>{
        return  <Card 
                key={beer.id}
                id={beer.id} 
                title={beer.name}
                image={beer.image_url}
                ph={beer.ph}
                tagline={beer.tagline}
                volume={beer.volume.value}
                first_brewed={beer.first_brewed}
                addedCart={props.addedToCart}
                />
    });
    // console.log(cards);
    return (
        <div className="pannel">
            {data.length>0 ? <Paginator
              onNext={()=>loadPosts('next')}  
              onPrevious={()=>loadPosts('previous')}
              lastPage={Math.ceil(totalPages / 2)}
              currentPage={postPage}>
                {cards}
            </Paginator>:<Loader/>}
            
        </div>
    )
}
export default Pannel;