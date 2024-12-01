import link from "../assets/login-page.png";

import React from "react";

export const Cart = () => {
  const value = [
    {
      _id: 1,
      image: link,
      title: "T-shirt With Tape Details",
      description: "",
      price: 200,
      category: "men",
      discount: 0,
    },
    {
      _id: 2,
      image: link,
      title: "T-Shirt",
      description: "",
      price: 200,
      category: "men",
      discount: 20,
    },
    {
      _id: 3,
      image: link,
      title: "T-Shirt",
      description: "",
      price: 200,
      category: "men",
      discount: 0,
    },
    {
      _id: 4,
      image: link,
      title: "T-shirt With Tape Details",
      description: "",
      price: 200,
      category: "men",
      discount: 50,
    },
  ];

  return (
    // <div className="">
    <div className="min-h-[100vh] min-w-[100vw]  flex flex-col justify-start items-center gap-5">
      <p className="text-6xl m-10 border-2 border-black">Cart</p>

      <div className="border-2 max-w-[900px] min-h-[400px] lg:min-w-[800px] w-[100%] h-[100%] flex md:flex-row flex-col justify-center items-center md:items-start gap-10 p-4 ">
        {/* Products List */}
        <div className="border-2 h-[100%] w-[100%] md:max-w[600px] max-w-[400px] p-2 flex flex-col gap-2 ">
          {value.map((product) => (
            <div key={product._id} className="border-2 border-black max-h-[300px] h-[100%] flex flex-wrap ">
              <div className="max-h-[200px] h-[100%] max-w-[200px] w-[100%] border-2 border-gray-900">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-[100%] w-[100%]"
                />
              </div>
              <div className="">
                <p className="">{product.title}</p>
                <div className="">
                  <button className="">+</button>
                  <span>1</span>
                  <button className="">-</button>
                </div>
                <div className="">
                  <button className="">Buy</button>
                  <button className="">Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Price & Checkout Section */}
        <div className="border-2 md:min-h-[300px] w-[100%] max-w-[300px] h-[100%] flex flex-col justify-evenly items-center">
          <div className="hidden border-2 text-2xl w-[100%] md:flex flex-col justify-evenly items-center h-[150px]">
            <p className="border-b-2 border-black ">Total Price: ₹800</p>
            <p className="border-b-2 border-black">Total Discount: ₹50</p>
            <p className="border-b-2 border-black ">Net Amount: ₹750</p>
          </div>
          <button className="borer-2 text-black bg-white rounded-lg sm:p-4 sm:text-2xl sm:hover:bg-black sm:hover:text-white p-1">
            Checkout The Cart
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
};
