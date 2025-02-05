import React from 'react';
import Img from "../assets/orange-pattern.jpg" 






const Subcribe  = () => {
  return (
    <div className="relative w-md overflow-hidden">  
        <div 
        data-aos="fade-in" 
        className="mb-20 bg-gray-100 dark:bg-gray-800
        text-white relative w-md h-[100px] sm:h-[150px] 
        md:h-[200px] lg:h-[150px] xl:h-[200px]"
        style={{
          backgroundImage: `url(${Img})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }} />

        <div 
          data-aos="fade-in"
          className="absolute inset-0 ">
          <div className="relative z-10 text-center text-white">
          <h1 data-aos="zoom-in" className="font-semi-bold sm-5px text-2xl mt-2"> For daily updates on New Products</h1>
          <p className="text-5xl font-bold">Subscribe</p>

          
          <input
                  type="text"
                  placeholder="Email"
                  className="w-150 h-4 p-6 mt-2 pl-3 text-xl text-gray-700"
                />
                <div>
                 <button className="sm-5px cursor-pointer bg-primary text-white 
                 py-2 px-5 mt-2 rounded-md hover:scale-105 transition-transform">
                  Submit
                 </button>
          </div>
          </div>  
        </div>
        <div>

        </div>
    </div>
  );
};

export default Subcribe;