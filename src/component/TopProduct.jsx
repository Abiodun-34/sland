import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
import Img1 from "../assets/shirt.png"; // Ensure path is correct
import Img2 from "../assets/shirt2.png"; // Ensure path is correct
import Img3 from "../assets/shirt3.png"; // Ensure path is correct
import { FaStar } from "react-icons/fa";

// IMPORTANT: If you are getting "Could not resolve" errors for react-icons,
// you need to install them: npm install react-icons


const ProductData = [
    {
      id: 1,
      img: Img1,
      title: "Casual Wear",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      img: Img2,
      title: "Printed shirt",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      img: Img3,
      title: "Women shirt",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

const TopProduct = ({ handleOrderPopup }) => {
     useEffect(() => {
        AOS.init({
          duration: 800, // Animation duration in milliseconds
          once: true, // Only animate once
        });
      }, []);
    
  return (
    <div className="py-10"> {/* Added vertical padding to the section */}
      <div className="container mx-auto px-4"> {/* Added px-4 for mobile padding */}
        {/* Header section */}
        <div className="text-center mb-12 sm:mb-16"> {/* Centered text, responsive margin-bottom */}
          <p data-aos="fade-up" className="text-sm text-primary mb-1"> {/* Adjusted margin-bottom */}
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-2xl sm:text-3xl font-bold mb-2"> {/* Responsive text size, adjusted margin-bottom */}
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto"> {/* Responsive text size, max-width for readability */}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* body section */}
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-6 place-items-center">
             {/* card section */}
          {ProductData.map((data) => (
            <div
              data-aos="zoom-in"
              key={data.id}
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary
              hover:text-white relative shadow-xl duration-300 group w-full max-w-xs sm:max-w-[280px] md:max-w-[300px] overflow-hidden"
            >
              {/* image section - Centering the image vertically and horizontally */}
              <div className="h-[120px] sm:h-[100px] flex items-center justify-center overflow-hidden">
                <img
                  src={data.img}
                  alt={data.title}
                  // Removed -translate-y-10 to keep the image naturally positioned
                  // The flexbox on the parent div already centers it.
                  className="max-w-[120px] sm:max-w-[140px] block group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section - This will naturally be at the bottom of the image container */}
              <div className="p-4 text-center pt-0">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1 mb-2">
                  <FaStar className="text-yellow-500 text-sm sm:text-base" />
                  <FaStar className="text-yellow-500 text-sm sm:text-base" />
                  <FaStar className="text-yellow-500 text-sm sm:text-base" />
                  <FaStar className="text-yellow-500 text-sm sm:text-base" />
                  <FaStar className="text-yellow-500 text-sm sm:text-base" />
                </div>
                <h1 className="text-lg sm:text-xl font-bold mb-1">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-xs sm:text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary text-sm sm:text-base"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProduct;
