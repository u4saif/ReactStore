import React from "react";

function Cart() {
  let product = {
    id: 123,
  };
  const handleOrderNow = () => {
    window.alert('Order placed succesfully!');
    
}
  const decrement = (id) => {};
  const increment = (id) => {};
  const handleDelete = (id) => {};
  const getSum = (id) => {};
  const getQty = (id) => {};
  return (
    <div className="container mx-auto lg:w-1/2 w-full pb-24">
    <h1 className="my-12 font-bold">Cart items</h1>
    <ul>
    <li className="mb-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img className="h-16" src="/assets/images/6.png" alt="" />
          <span className="font-bold ml-4 w-48">Name </span>
        </div>
        <div>
          <button
            onClick={() => {
              decrement(product._id);
            }}
            className="bg-yellow-300 px-4 py-2 rounded-full leading-none"
          >
            -
          </button>
          <b className="px-4">{getQty(product._id)}</b>
          <button
            onClick={() => {
              increment(product._id);
            }}
            className="bg-yellow-300 px-4 py-2 rounded-full leading-none"
          >
            +
          </button>
        </div>
        <span>₹ {getSum(product._id)}</span>
        <button
          onClick={() => {
            handleDelete(product._id);
          }}
          className="bg-red-500 px-4 py-2 rounded-full leading-none text-white"
        >
          Delete
        </button>
      </div>
    </li>
    <li className="mb-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img className="h-16" src="/assets/images/6.png" alt="" />
          <span className="font-bold ml-4 w-48">Name </span>
        </div>
        <div>
          <button
            onClick={() => {
              decrement(product._id);
            }}
            className="bg-yellow-300 px-4 py-2 rounded-full leading-none"
          >
            -
          </button>
          <b className="px-4">{getQty(product._id)}</b>
          <button
            onClick={() => {
              increment(product._id);
            }}
            className="bg-yellow-300 px-4 py-2 rounded-full leading-none"
          >
            +
          </button>
        </div>
        <span>₹ {getSum(product._id)}</span>
        <button
          onClick={() => {
            handleDelete(product._id);
          }}
          className="bg-red-500 px-4 py-2 rounded-full leading-none text-white"
        >
          Delete
        </button>
      </div>
    </li>
    
    </ul>
            <hr className="my-6"/>
            <div className="text-right">
                <b>Grand Total:</b> ₹ 222
            </div>
            <div className="text-right mt-6">
                <button onClick={handleOrderNow} className="bg-yellow-300 px-4 py-2 rounded-full leading-none">Order Now</button>
            </div>
        </div>
  );
}

export default Cart;
