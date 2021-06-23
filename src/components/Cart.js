import {React,useEffect,useContext, useState} from "react";
import {CartContext} from '../CartContext';

function Cart() {
  let total = 0;
  let {cart , setCart }=useContext(CartContext);
  const [isCartDetailFetched, toggleIsCartDetailFetched] = useState(false);
  const [cartDetail, setcartDetail] = useState([]);

  const getCartList=()=>{
    if(!cart.items){
      return;
    } 
    if(isCartDetailFetched){
      return;
    }
    fetch('/api/cart',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({ id: Object.keys(cart.items)})
    })
    .then(res=>res.json())
    .then(data=>{
      setcartDetail(data)
      toggleIsCartDetailFetched(true);
    });
    
  }

  useEffect(() => {
    getCartList();
  }, [cart,isCartDetailFetched]);

  const handleOrderNow = () => {
    window.alert('Order placed succesfully!');
    setcartDetail([]);
    setCart({});
    
}
  const decrement = (id) => {
    if(cart.items[id]==1){
      return
    }
    let _cart= {...cart};
    _cart.items[id]--;
    _cart.totalItems--;
    setCart(_cart);
  };

  const increment = (id) => {
    let _cart= {...cart};
    _cart.items[id]++;
    _cart.totalItems++;
    setCart(_cart);
  };
  const handleDelete = (id) => {
    let _cart= {...cart};
    let qty= _cart.items[id];
    delete _cart.items[id];
    _cart.totalItems-=qty;
    const updatedProductsList = cartDetail.filter((product) => product.id !== id);
    setcartDetail(updatedProductsList);
    setCart(_cart);
  };
  const getSum = (id,price) => { 
    let sum = cart.items[id] * price;
    total += sum;
    return sum;
  };
  const getQty = (id) => { return cart.items[id]};
  return (
   (!cartDetail?.length)
        ? <img className="mx-auto w-1/3 mt-12" src="/assets/images/empty-cart.png" alt="" />
        :
    <div className="container mx-auto lg:w-1/2 w-full pb-24 ">
    <h1 className="my-12 font-bold">Cart items</h1>
    <ul>
     {
       cartDetail.map(item=>{  
         return (

          <li className="mb-12" key={item.id}>
          <div className="flex items-center md:justify-between justify-space-evenly">
            <div className="flex items-center">
              <img className="h-16 mx-1" src={item.imgUrl} alt="" />
              <span className="md:font-bold ml-4 md:w-48">{item.name} </span> 
            </div>
            <div>
              <button
                onClick={() => {
                  decrement(item.id);
                }}
                className="bg-yellow-300 md:px-4 md:py-2 p-1 rounded-full leading-none"
              >
                -
              </button>
              <b className="md:px-4">{getQty(item.id)}</b>
              <button
                onClick={() => {
                  increment(item.id);
                }}
                className="bg-yellow-300  md:px-4 md:py-2 p-1  rounded-full leading-none"
              >
                +
              </button>
            </div>
            <span>$ {getSum(item.id,item.price)}</span>
            <button
              onClick={() => {
                handleDelete(item.id);
              }}
              className="bg-red-500 md:px-4 p-2 rounded-full leading-none text-white"
            >
              Delete
            </button>
          </div>
        </li>
       
         )
       })
     } 
   
    </ul>
            <hr className="my-6"/>
            <div className="text-right">
                <b>Grand Total:</b> ₹ {total}
            </div>
            <div className="text-right mt-6">
                <button onClick={()=>{handleOrderNow()}} className="bg-yellow-300 px-4 py-2 rounded-full leading-none">Order Now</button>
            </div>
        </div>
 
  );
}

export default Cart;
