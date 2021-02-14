import './App.css';
import Layout from './components/Layout/Layout';
import Pannel from './containers/Pannel/Pannel';
import Backdrop from './components/UI/Backdrop/Backdrop';
import React,{useEffect,useState} from 'react';
import SideBar from './components/Layout/SideBar/SideBar';
import Footer from './components/Footer/Footer';
import Modal from './components/UI/Modal/Modal';
import SingleBeer from './containers/SingleBeer/SingleBeer';
import Cart from './containers/Cart/Cart';
import {Switch, Route,Redirect} from 'react-router-dom';
// import sideBar from './components/Layout/SideBar/SideBar';
function App() {
  const [showSideNav,setShowSideNav] = useState(false);
  const [showBackDrop,setShowBackDrop]=useState(false);
  const [cartItems,setCartItems]=useState([]);
  const [totalAmt,setTotalAmt]=useState(0);
  const mobileToggleHandler = ()=>{
    // console.log("clicked")
    setShowBackDrop(!showBackDrop);
    setShowSideNav(!showSideNav);
  }
  const backDropClickHandler=()=>{
    setShowBackDrop(!showBackDrop);
    setShowSideNav(!showSideNav);
  }
  const addedToCart=id=>{
    // console.log(id);
    let itemIdx = null;
    itemIdx = [...cartItems].findIndex(item=>item.id === id);
    // console.log(itemIdx);
      
    if(itemIdx>=0){
      const items = [...cartItems];
      items[itemIdx].quantity+=1;
      setCartItems(items);
      const total = totalAmt + items[itemIdx].price;
      setTotalAmt(total);
    }
    else{
    fetch('https://api.punkapi.com/v2/beers/'+ id,
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
          // console.log(beer[0]);
          const items = [...cartItems];
          const item={...beer[0],quantity:1,price:100};
          items.push(item);
          setCartItems(items);
          const total = totalAmt + item.price;
          setTotalAmt(total);
    })
  } 
  }
  const increaseQuantityHandler=(id)=>{
    const items = [...cartItems];
    const updateItemIdx = items.findIndex(item=>item.id === id);
    const updateItem = items[updateItemIdx];
    updateItem.quantity +=1;
    items[updateItemIdx]=updateItem;
    const amt = totalAmt + updateItem.price;
    setCartItems(items);
    setTotalAmt(amt);
}
const decreaseQuantityHandler=(id)=>{
    const items = [...cartItems];
    const updateItemIdx = items.findIndex(item=>item.id === id);
    const updateItem = items[updateItemIdx];
    updateItem.quantity -=1;
    const amt = totalAmt - updateItem.price;
    setTotalAmt(amt);
    if(updateItem.quantity <= 0){
        const updateditems=items.filter(item=>item.id!==id);
        setCartItems(updateditems)
    }
    else{
    items[updateItemIdx]=updateItem;
    setCartItems(items);
    }
}
  const routes = (
    <Switch>
      <Route
        path="/cart"
        exact
        render={props=>(
          <Cart cartItems={cartItems} total={totalAmt} incQty={increaseQuantityHandler} decQty={decreaseQuantityHandler}/>
        )}/>
      <Route
        path="/"
        exact
        render={props => (
          <Pannel addedToCart={addedToCart}/>
        )}
      />
      <Route
        path="/:beerId"
        exact
        render={props => (
          <SingleBeer {...props} addedToCart={addedToCart}/>
        )}
      />
      <Redirect to="/" />
    </Switch>
  );
  return (
    <div className="App">
        <Backdrop open={showBackDrop} clicked={backDropClickHandler}/>
        <SideBar open = {showSideNav} clicked={mobileToggleHandler}/>
        <Layout toggle={mobileToggleHandler}/>
        {routes}     
        {/*<Modal/>*/}
        <Footer/>
    </div>
  );
}

export default App;
