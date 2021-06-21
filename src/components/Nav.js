import React from "react";  
function Nav() {
  return (
    <div className="bg-pink-600 p-4 shadow-2xl">
      <ul className="flex justify-between color: #3182ce;">
        <li className="mr-3">
          <a
            className="inline-block py-2 px-4 text-white cursor-not-allowed font-bold"
            href="#"
          >
            Shopper's Shoose
          </a>
        </li>
        <li className="mr-3">
          <a
            className="flex border border-blue-700 rounded py-2 px-4 bg-yellow-300  hover:bg-yellow-500 hover:text-white"
            href="#"
          >
          Cart
            <img className="ml-2" src="/assets/images/cart.png" alt="cart-icon" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
