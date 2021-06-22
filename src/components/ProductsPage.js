import {React, useState, useEffect} from "react";
import SingleProduct from './SingleProduct';

function ProductsPage() {
  const  [productsList, setproductsList] = useState([]);
  
  useEffect(() => {
    fetch('/api/products')
    .then((res)=>{return res.json()})
    .then((data)=>{
      setproductsList(data);
    })
  }, [])
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
     {  productsList.map(item=> <SingleProduct key={item.id} product={item} />)}
    </div>
  );
}

export default ProductsPage;
