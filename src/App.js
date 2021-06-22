import "./App.css";
import Nav from "./components/Nav";
import ProductsPage from "./components/ProductsPage";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CartContext } from "./CartContext";

function App() {
  return (
    <>
      <Router>
        <CartContext.Provider value={{myname:"Saif"}} >
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
