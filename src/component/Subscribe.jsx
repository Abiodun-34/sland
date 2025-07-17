import React, { useEffect } from 'react'; 
import Img from "../assets/orange-pattern.jpg"; 
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 

const Subscribe = () => { 
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, 
    });
  }, []);

  return (
    <div className="relative overflow-hidden py-12 sm:py-16 md:py-20"> 
        <div
        data-aos="fade-in"
        className="absolute inset-0 bg-gray-100 dark:bg-gray-800" 
        style={{
          backgroundImage: `url(${Img})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: 0, 
        }} />

        <div
          data-aos="fade-in"
          className="relative z-10 text-center text-white px-4"> 
          <h1 data-aos="zoom-in" className="font-semibold text-xl sm:text-2xl md:text-3xl mt-2 mb-2"> 
            For daily updates on New Products
          </h1>
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Subscribe</p> 


          <input
                  type="text"
                  placeholder="Email"
                  className="w-full max-w-sm p-3 mt-2 pl-3 text-base sm:text-lg text-gray-700 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" // Responsive width, padding, text size
                />
                <div className="mt-4"> 
                 <button className="cursor-pointer bg-primary text-white
                 py-2 px-6 rounded-md hover:scale-105 transition-transform text-base sm:text-lg font-semibold"> 
                  Submit
                 </button>
          </div>
          </div>
    </div>
  );
};

export default Subscribe;
