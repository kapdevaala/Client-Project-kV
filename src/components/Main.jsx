import React from "react";
import link from "../assets/Main-Image.png";

export const Main = () => {
  return (
    <div className="flex   max-w-[1800px] md:min-h-[80vh] sm:min-h-[50vh] min-h-[30vh] w-[100%]  h-[100%] relative ">
      <div className="h-[100%] w-[100%] absolute">
        <img
          src={link}
          alt="logo"
          className="h-[100%] w-[100%] cursor-pointer rounded-2xl"
        />
      </div>
      <div className="h-[100%] w-[60%] absolute flex justify-evenly items-center flex-col top-0 left-0 bottom-0  text-[8px] md:text-[20px]">
        <h1 className="font-bold  text-center  text-[15px] md:text-[50px]">
          Find Clothes That Matches Your Style
        </h1>
        <p className=" text-center sm:w-[70%]">
          Browse Through Our Diverse range of meticulously creafted garmnts
          designed to bring out your indivisuality and cater to your sence of
          style
        </p>

        <button className="border-2 border-black p-1 text-white bg-black  rounded-lg">
          Shop Now{" "}
        </button>
        <div className="w-[100%] flex justify-center gap-2">
          <span className="border-r-2 border-[#6b6666]  flex flex-col justify-evenly items-center md:p-2">
            <p className="font-bold ">200+</p>
            <p className="text-center ">International Brands</p>
          </span>
          <span className="border-r-2 border-[#6b6666]  flex flex-col justify-evenly items-center md:p-2">
            <p className="font-bold ">200+</p>
            <p className="text-center">International Brands</p>
          </span>
          <span className="flex flex-col justify-evenly items-center md:p-2">
            <p className="font-bold ">200+</p>
            <p className="text-center">International Brands</p>
          </span>
        </div>
      </div>
    </div>
  );
};
