import React from "react";

export const Footer = () => {
  return (
    <div className="w-[100%] flex flex-col justify-center items-center p-2">
      <div className="min-h-[150px] rounded-xl w-[90%] max-w-[1200px] flex-wrap bg-black text-white flex  items-center justify-evenly  gap-4 p-4">
        <p className="text-center  sm:text-2xl lg:text-4xl sm:max-w-[40%] font-bold"> STAY UPTO DATE ABOUT OUR LATEST OFFERS</p>
        <div className="max-w-[300px]  flex flex-col gap-3 w-[100%]">
          <input
            type="text"
            placeholder="Enter Your Email Address"
            onChange={(e) => e.target.value}
            className="rounded-lg text-center p-1 sm:p-2 text-black"
          />
          <button className="border-2 rounded-lg p-1 sm:p-2 sm:text-xl">Subscribe to Newsletter</button>
        </div>
      </div>
      <div>
        
      </div>

    </div>
  );
};
