import React from 'react';
import BannerImg from "../assets/women.png";
import { FaCheck } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
       <div className="container">
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6 items-center lg:m-32">
          <div
          data-aos="zoom-out">
            <img
            src={BannerImg}
            alt="Banner Image"
            className="bg-primary drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] mx-12 w-[350px] h-[300px] object-cover object-center"
            />
          </div>
          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0 sm:mx-6 px-5">
            <h1 data-aos="fade-down" className="text-4xl font-bold text-black">Winter Sale upto 60% Off</h1>
        
            <p data-aos="fade-down" className="text-sm text-gray-500 tracking-wide">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
            reiciendis inventore iste ratione ex alias quis magni at optio</p>

            <div className="flex flex-col gap-4">
              <div data-aos="zoom-in" className="flex items-center gap-4">
                <FaCheck data-aos="fade-in" className="bg-green-200 rounded-full shadow-sm h-9 w-9 text-4xl" />
                <p  data-aos="fade-out"  className="font-bold">Quality Products</p>
              </div>

              <div data-aos="zoom-in" className="flex items-center gap-4">
                <FaCheck data-aos="fade-in" className="bg-yellow-200 rounded-full shadow-sm h-9 w-9 text-4xl" />
                <p  data-aos="fade-out"  className="font-bold">Get Offers</p>
              </div>
                
              <div data-aos="zoom-in" className="flex items-center gap-4">
                <FaCheck data-aos="fade-in" className="bg-blue-200 rounded-full shadow-sm h-9 w-9 text-4xl" />
                <p  data-aos="fade-out"  className="font-bold">Easy Payment method</p>
              </div>

              <div data-aos="zoom-in" className="flex items-center gap-4">
                <FaCheck data-aos="fade-in" className="bg-red-300 rounded-full shadow-s h-9 w-9 text-4xl" />
                <p  data-aos="fade-out"  className="font-bold">Fast Delivery</p>
              </div>
              
            </div>
          </div>
        </div>

      </div> 
    </div>
  );
};

export default Banner;