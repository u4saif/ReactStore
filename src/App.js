import "./App.css";
import {useState,useEffect} from 'react';
import Nav from "./components/Nav";
import ProductsPage from "./components/ProductsPage";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CartContext } from "./CartContext";

function App() {
  const [cart, setCart] = useState({});
useEffect(() => {
 const cart =window.localStorage.getItem("cart");
 setCart(JSON.parse(cart));
}, [])

useEffect(()=>{
  window.localStorage.setItem("cart",JSON.stringify(cart));
},[cart]);
  return (
    <>
      <Router>
        <CartContext.Provider value={{cart,setCart}} >
          <Nav />
          <Switch>
            <Route path="/" component={ProductsPage} exact></Route>
            <Route path="/cart" component={Cart}></Route>
          </Switch>
        </CartContext.Provider>
      </Router>
    </>
  );
}

export default App;
