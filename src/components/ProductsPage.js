import React from "react";

function ProductsPage() {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      <div className="rounded overflow-hidden shadow-lg">
        <img
          className="w-auto"
          src="/assets/images/5.png"
          alt="Mountain"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Mountain</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex px-6 pt-4 pb-2 justify-between">
          <span className="inline-block bg-pink-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">
            Price : $400
          </span>
           
          <span className="inline-block bg-yellow-500 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">
            Add
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
