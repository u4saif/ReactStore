import {React,useContext} from "react";  
import {Link}  from 'react-router-dom';
import {CartContext} from '../CartContext';

function Nav() {
  let {cart}=useContext(CartContext);
  return (
    <div className="bg-pink-600 p-4 shadow-2xl sticky top-0">
      <ul className="flex justify-between color: #3182ce;">
        <li className="mr-3">
          <Link
            className="inline-block py-2 px-4 text-white cursor-ponter font-bold"
            to="/"
          >
            Shopper's Shoose
          </Link>
        </li>
        <li className="mr-3">
          <Link
            className="flex border border-blue-700 rounded py-2 px-4 bg-yellow-300  hover:bg-yellow-500 hover:text-white"
            to="/cart"
          >
          <b> {cart?.totalItems || 0}</b>
            <img className="ml-2" src="/assets/images/cart.png" alt="cart-icon" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
