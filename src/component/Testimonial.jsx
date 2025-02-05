import React from 'react';
import Slider from "react-slick";
import { FaStar } from "react-icons/fa"; // Add this import
import img2 from "../assets/user2.jpeg";
import img3 from "../assets/user3.jpeg";
import img4 from "../assets/user4.jpeg";
import img5 from "../assets/user5.jpeg";


const TestimonialData = [
    {
      id: 1,
      name: "Victor",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: img2
     },
    {
      id: 2,
      name: "Satya Nadella",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: img3
    },
    {
      id: 3,
      name: "Virat Kohli",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: img4
    },
    {
      id: 5,
      name: "Sachin Tendulkar",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: img5
    },
  ];





const Testimonial = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
              breakpoint: 10000,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              },
            },
        ]
      };

  return (
    <div className="py-10 mb-10">
        <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p
            data-aos="fade-up"
            className="text-primary text-sm"
          >
            What customers are saying
          </p>
          <h1
            data-aos="fade-up"
            className="text-3xl font-bold"
          >
            Reviews
          </h1>
        </div>
            
                  {/* Card section */}
        <div data-aos="zoom-in">
                  <Slider {...settings}>
                  {TestimonialData.map((data) => (
                    <div
                      key={data.id} // Proper key attribute placement
                      className="rounded-2xl bg-white grid grid-cols-2 gap-4
                         hover:text-white relative px-4 shadow-xl duration-300 group max-w-[300px]"
                    >
                    <div>
                      <img
                        src={data.img}
                        alt={data.title || "Product Image"} // Added alt for better accessibility
                        className="rounded-full w-20 h-20"
                      />
                    </div>
                      <div className="flex flex-col gap-4">
                        <h3 className="text-xs mt-2 text-gray-400">{data.text}</h3>
                        <p className="text-xl item-left font-bold text-gray-600">{data.name}</p>
                        <div className="flex  items-center gap-1 justify-center">
                        <div className="w-full flex items-center justify-center gap-1">
                                          <FaStar className="text-yellow-500" />
                                          <FaStar className="text-yellow-500" />
                                          <FaStar className="text-yellow-500" />
                                          <FaStar className="text-yellow-500" />
                                        </div>
                        </div>
                      </div>
                    </div>
                  ))}
                   </Slider>
        </div>
    </div>
    </div>
  );
};

export default Testimonial;