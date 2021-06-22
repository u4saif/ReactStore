import React from "react";

const SingleProduct = (props) => {
    const {product}=props;
    const add=()=>{
        console.log("added to cart");
      }
  return (
    <>
      <div className="rounded overflow-hidden shadow-lg">
        <img className="w-full h-80" src="" alt="Mountain" src={product.imgUrl}/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.name}</div>
          <p className="text-gray-700 text-base">
             {product.discription}
          </p>
        </div>
        <div className="flex px-6 pt-4 pb-2 justify-between">
          <span className="inline-block bg-pink-200 rounded-full px-3 py-1 text-l font-semibold text-gray-700 mr-2 mb-2">
            Price : ${product.price}
          </span>

          <a
            onClick={(e) => {
              add();
            }}
            className="inline-block bg-yellow-500 rounded-full px-3 py-1 text-l font-semibold text-gray-700 mr-2 mb-2 cursor-pointer hover:bg-yellow-300"
          >
            Add to Cart
          </a>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;