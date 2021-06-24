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
        <li className="mr-4">
          <Link
            className="flex border border-blue-700 rounded py-2 px-4 bg-yellow-300  hover:bg-yellow-500 hover:text-white"
            to="/cart"
          > 
            <span className="relative inline-block pt-2">
  <svg className="w-6 h-6 text-gray-700 fill-current" viewBox="0 0 20 20"> <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
  <span className="absolute ml-2 top-1 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">{cart?.totalItems || 0}</span>
</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
