import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles

import { FaStar } from "react-icons/fa6"; // Correctly imported icons

import Img2 from "../assets/women2.jpg";
import Img3 from "../assets/women3.jpg";
import Img4 from "../assets/women4.jpg";


const ProductsData = [
  {
    id: 1,
    img: Img3,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];


const Product = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
    });
  }, []); // useEffect properly placed inside the component

  return (
    <div>
      <div>
        {/* Header section */}
        <div className="text-center">
          <p
            data-aos="fade-up"
            className="text-primary text-sm"
          >
            Top Selling Products for you
          </p>
          <h1
            data-aos="fade-up"
            className="text-3xl font-bold"
          >
            Products
          </h1>
          <p
            data-aos="fade-up"
            className="text-sm text-gray-500"
          >
            really nice clothe
            ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores
            modi Sit asperiores modi
          </p>
        </div>

        {/* Body section */}
        <div className="grid grid-cols-1 ml-10 sm:grid-cols-2 md:grid-cols-5 gap-6 place-items-center mt-10">
          {/* Card section */}
          {ProductsData.map((data) => (
            <div
              key={data.id} // Proper key attribute placement
              data-aos="fade-up"
              data-aos-delay={data.aosDelay || 0} // Default delay fallback
              className="space-y-3 text-center w-full max-w-[300px"
            >
              <img
                src={data.img}
                alt={data.title || "Product Image"} // Added alt for better accessibility
                className="w-[200px] h-[200px] object-cover object-center rounded-md shadow-md"
              />
              <div>
                <h3 className="font-semibold">{data.title}</h3>
                <p className="text-sm text-gray-600">{data.color}</p>
                <div className="flex items-center gap-1 justify-center">
                  <FaStar className="text-yellow-400" />
                  <span>{data.rating}</span>
                </div>
              </div>
            </div>
          ))}

          {/* View All Button */}
          <div className="flex justify-center w-full col-span-full mt-10">
            <button className="cursor-pointer bg-primary text-white py-2 px-5 rounded-md hover:scale-105 transition-transform">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
