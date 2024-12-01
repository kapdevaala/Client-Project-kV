import React from "react";
import link from "../assets/Logo.png";

export const Footer = () => {
  return (
    <div className="w-[100%] flex flex-col  justify-center items-center relative">
      <div className="w-[100%] flex flex-col justify-center items-center p-2 absolute sm:top-12 top-4">
        <div className="min-h-[150px] rounded-xl w-[90%] max-w-[1200px] flex-wrap bg-black text-white flex  items-center justify-evenly  gap-4 p-4">
          <p className="text-center  sm:text-2xl lg:text-4xl sm:max-w-[40%] font-bold">
            {" "}
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </p>
          <div className="max-w-[300px]  flex flex-col gap-3 w-[100%]">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              onChange={(e) => e.target.value}
              className="rounded-lg text-center p-1 sm:p-2 text-black"
            />
            <button className="border-2 rounded-lg p-1 sm:p-2 sm:text-xl">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
      <div className="h-[150px]"></div>
      <div className="max-w-[1500px] w-[100%] rounded-xl bg-[#c9c6c6] min-h-[400px] h-[100%] text- flex flex-col justify-end items-center p-5">
        <div className="h-[100%] w-[100%] p-2  flex sm:flex-nowrap flex-wrap items-center  gap-2 justify-center">
          {/* Left with Logo */}
          <div className=" max-w-[250px] min-h-[300px] flex justify-evenly flex-col items-start ">
            <img
              src={link}
              alt="Footer_logo"
              className=" h-[100%] w-[90%] min-h-[80px]   "
            />
            <p>
              We have Clothes that suits your style and which you're proud to
              wear From men to women
            </p>
            <div className="flex gap-6 w-[100%] justify-start items-center">
              <p>tw</p>
              <p>tw</p>
              <p>tw</p>
              <p>tw</p>
            </div>
          </div>

          {/* Right with information */}
          <div className="  border-black w-[100%] sm:w-[80%]  h-[300px] flex items-center  sm:flex-nowrap flex-wrap justify-evenly  text-[12px] sm:text-[15px]">
            <div className=" flex flex-col items-center justify-center  min-h-[50%]  sm:h-[100%] w-[50%] sm:w-[25%]">
              <h1 className="text-[14px] sm:text-[20px] mb-5 text-start">
                Company
              </h1>
              <div className=" ">
                <p>bout</p>
                <p>Features</p>
                <p>Work</p>
                <p>Careers</p>
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center  min-h-[50%]  sm:h-[100%] w-[50%] sm:w-[25%]">
              <h1 className="text-[14px] sm:text-[20px] mb-5">Help</h1>
              <div>
                <p>Customer Support</p>
                <p>Delivery-Details</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center  min-h-[50%]  sm:h-[100%] w-[50%] sm:w-[25%]">
              <h1 className="text-[14px] sm:text-[20px] mb-5">FAQ</h1>
              <div>
                <p>Account</p>
                <p>Manage Deliveries</p>
                <p>Orders</p>
                <p>Payments</p>
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center  min-h-[50%]  sm:h-[100%] w-[50%] sm:w-[25%]">
              <h1 className="text-[14px] sm:text-[20px] mb-5">Resources</h1>
              <div>
                <p>Free eBooks</p>
                <p>Development Tutorial</p>
                <p>How to-Blog</p>
                <p>Youtube-Playlist</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[100%] w-[100%] flex  flex-wrap justify-evenly ">
          <span className="text-center">ECommerce.com All Right reserved</span>
          <div className="flex ">
            <p>visa</p>
            <p>visa</p>
            <p>visa</p>
            <p>visa</p>
            <p>visa</p>
          </div>
        </div>
      </div>
    </div>
  );
};
