import React from "react";  
function Nav() {
  return (
    <div className="bg-pink-600 p-4 shadow-2xl">
      <ul className="flex justify-between color: #3182ce;">
        <li className="mr-3">
          <a
            className="inline-block py-2 px-4 text-gray-400 cursor-not-allowed"
            href="#"
          >
            Shopper's Shoose
          </a>
        </li>
        <li className="mr-3">
          <a
            className="flex border border-blue-700 rounded py-2 px-4 bg-green-500  hover:bg-blue-500 text--black"
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
