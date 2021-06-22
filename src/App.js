import './App.css';
import Nav from './components/Nav';
import ProductsPage from './components/ProductsPage';
import Cart from './components/Cart';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Nav/>
      <Switch>
      <Route path="/" component={ProductsPage} exact></Route>
      <Route path="/cart" component={Cart }></Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
