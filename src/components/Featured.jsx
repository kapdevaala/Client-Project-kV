import React from "react";
import link from "../assets/login-page.png";
import { useEffect } from "react";
import { useState } from "react";

export const Featured = () => {
  const [value, setValue] = useState([]);
  const getProducts = async () => {
    try {
      const resp = await fetch(
        "https://backend-project-kv.onrender.com/api/v1/product/all"
      );
      const response = await resp.json();
      console.log("Response Product", response);
      setValue(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
 
  return (
    <div className="  w-[100%] flex flex-col justify-center items-center gap-7 sm:text-xl  ">
      <p className="sm:text-4xl  text-2xl text-center font-bold m-5 sm:m-10">
        Featured Products
      </p>

      {value.length == 0 ? (
        <div className="h-[200px] w-[100%] flex justify-center items-center">
          <h1>No Products Avialable </h1>
        </div>
      ) : (
        <div className="max-w-[100%] w-[100%] flex flex-wrap justify-center items-center gap-3 min-h-[200px] h-[100%]">
          {value.map((product) => (
            <div className="shadow shadow-[black] bg-[] h-[450px] w-[300px] flex flex-col gap-2 justify-evenly p-4 rounded-lg">
              <div className=" h-[55%] w-[100%] rounded-lg">
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
              <div className="flex justify-evenly items-center gap-2 w-[100%] ">
                <button className="p-2  rounded-2xl text-white bg-[#3C3C3C] w-[50%]">
                  Cart
                </button>
                <button className="p-2  rounded-2xl text-white bg-[#3C3C3C] w-[50%]">
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <button className=" m-10 p-5 sm:p-3 sm:w-[140px] rounded-2xl text-white bg-[#3C3C3C] ">
        View All
      </button>
    </div>
  );
};
