import React from 'react';
import { toast } from 'react-toastify';


const Cart = ({ carts, setCarts }) => {
  console.log(carts);

  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    setCarts([]);
  toast.success("proceed to payment")

  };

    const handleDelete = (item) => {
    const filteredArray = carts.filter((c) => c.id !== item.id);
    setCarts(filteredArray);
    toast.success("item deleted successfully")
    };

    


  return (
    <div className='p-10'>
      <h1 className='text-2xl font-bold'>your cart</h1>

      {carts.length === 0 ? (
        <p className="text-center text-2xl p-5">Cart is empty</p>
      ) : (
        <>
          <div className="space-y-5 mt-4">
            {(carts || []).map((item) => (
              <div
                className="flex items-center justify-between border rounded-full p-3"
                key={item.id}
              >
                <div className="flex items-center gap-4">
                  <img
                    className="h-20 w-20 object-contain"
                    src={item.icon}
                    alt={item.title}
                  />
                  <h2 className="text-xl font-bold">{item.title}</h2>
                </div>

                <div className="text-xl font-bold flex gap-3">
                  ${item.price}/month


                    <button
                    onClick={() => handleDelete(item)}
                    className=" btn rounded-full  p-2 text-red-500"
                  >
                   Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="flex justify-between text-black p-5 mt-5 rounded-lg text-3xl font-bold">
              <div>Total</div>
              <div>$ {totalPrice}</div>
            </div>

            <button
              onClick={handlePayment}
              className="btn w-full p-5 mt-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-3xl rounded-lg"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;