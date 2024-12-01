import React from "react";
import link from "../assets/login-page.png";

export const Featured = () => {
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
      _id: 1,
      image: link,
      title: "T-Shirt",
      description: "",
      price: 200,
      category: "men",
      discount: 20,
    },
    {
      _id: 1,
      image: link,
      title: "T-Shirt",
      description: "",
      price: 200,
      category: "men",
      discount: 0,
    },
    {
      _id: 1,
      image: link,
      title: "T-shirt With Tape Details",
      description: "",
      price: 100,
      category: "men",
      discount: 50,
    },
  ];

  return (
    <div className="  w-[100%] flex flex-col justify-center items-center gap-7 sm:text-xl  ">
      <p className="sm:text-4xl  text-2xl text-center font-bold m-5 sm:m-10">
        Featured Products
      </p>
      <div className="max-w-[100%] w-[100%] flex flex-wrap justify-center items-center gap-3 min-h-[200px] h-[100%]">
        {value.map((product) => (
          <div className="shadow shadow-[black] bg-[] h-[450px] w-[300px] flex flex-col gap-2 justify-evenly p-4 rounded-lg">
            <div className=" h-[100%] w-[100%] rounded-lg">
              <img
                src={product.image}
                alt={product.title}
                className="h-[100%] w-[100%] rounded-lg"
              />
            </div>
            <div className="w-[100%]  p-1  flex flex-col gap-2 items-start ">
              <p className=""> {product.title}</p>
              {product.discount <= 0 ? (
                <button className=" rounded-2xl ">Rs.{product.price}</button>
              ) : (
                <div className="w-[100%] flex  flex-start justify-evenly flex-wrap">
                  <button className=" rounded-2xl ">
                    Rs.
                    {product.price - (product.price * product.discount) / 100}
                  </button>
                  <button className="rounded-2xl ">{product.price}</button>
                  <button className="p-2 rounded-2xl text-[red] bg-[pink] ">
                    {product.discount}%
                  </button>
                </div>
              )}
            </div>
            <button className="p-2 rounded-2xl text-white bg-[#3C3C3C]">
              Buy
            </button>
          </div>
        ))}
      </div>
      <button className=" m-10 p-5 sm:p-3 sm:w-[140px] rounded-2xl text-white bg-[#3C3C3C] ">
        View All
      </button>
    </div>
  );
};
