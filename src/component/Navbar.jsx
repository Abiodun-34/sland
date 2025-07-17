import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { FaShoppingCart, FaCaretDown } from "react-icons/fa";



const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Top Rated", link: "/#" },
  { id: 3, name: "Kids Wear", link: "/#" },
  { id: 4, name: "Mens Wear", link: "/#" },
  { id: 5, name: "Electronics", link: "/#" },
];

const DropdownLinks = [
  { id: 1, name: "Trending Products", link: "/#" },
  { id: 2, name: "Best Selling", link: "/#" },
  { id: 3, name: "Top Rated", link: "/#" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Upper Navbar */}
      <nav className="sticky bg-primary/40 shadow-md top-0 py-3 backdrop-blur-lg border-neutral-700 duration-200 z-40">
        <div className="container px-4 mx-auto relative">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center flex-shrink-0">
              <img className="h-8 w-8 sm:h-10 sm:w-10 mr-2" src={logo} alt="logo" />
              <span className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-orange-600 tracking-tight whitespace-nowrap overflow-hidden text-ellipsis max-w-[150px] sm:max-w-none">
                ShopMe
              </span>
            </div>

            {/* Right side of Upper Navbar */}
            <div className="flex items-center gap-4 sm:gap-6">
              {/* Search Box (Hidden on extra small, block on sm+) */}
              <div className="relative group hidden sm:block">
                <input
                  type="text"
                  placeholder="search"
                  className="w-[120px] sm:w-[150px] md:w-[200px] group-hover:w-[250px] transition-all rounded-full duration-300 border-gray-300 px-2 py-1 focus:outline-none focus:border-1"
                />
                <IoSearchSharp className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
              </div>

              {/* Order Button */}
              <button
                onClick={() => console.log("Ordering not available yet")}
                className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-2 sm:px-4 rounded-full flex items-center gap-1 sm:gap-3 group"
              >
                <span className="group-hover:block hidden sm:block transition-all duration-200 text-sm sm:text-base">
                  Order
                </span>
                <FaShoppingCart className="text-lg sm:text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>

             
              {/* Hamburger Menu for Mobile (visible on sm:hidden, flex on smaller screens) */}
              <div className="sm:hidden flex items-center">
                <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                  {isMenuOpen ? <RxCross2 className="text-2xl" /> : <GiHamburgerMenu className="text-2xl" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Lower Navbar (Desktop) */}
      {/* This section will only be visible on screens larger than 'sm' */}
      <div className="py-2 shadow-md shadow-gray-300 hidden sm:flex justify-center">
        <ul className="items-center gap-4"> {/* This ul is already horizontally arranged by default with flex */}
          {Menu.map((data) => (
            <li key={data.id}>
              {/* Corrected: Re-added Link component */}
              
                {data.name}
              
            </li>
          ))}

          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>

            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    {/* Corrected: Re-added Link component */}
                    
                      {data.name}
                    
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>

      {/* Mobile Menu (Hamburger Drawer) */}
      {/* This will contain the "Lower Navbar" links for mobile */}
      {isMenuOpen && (
        <div className="fixed inset-x-0 top-[60px] z-30 bg-white dark:bg-gray-900 shadow-lg rounded-b-lg p-4 sm:hidden">
          <ul className="space-y-2"> {/* space-y-2 makes it vertical for mobile */}
            {/* Main Menu Links */}
            {Menu.map((data) => (
              <li key={data.id}>
                
                  {data.name}
                
              </li>
            ))}

            {/* Dropdown for Mobile (integrated into mobile menu) */}
            <li className="group relative cursor-pointer">
              <a href="#" className="flex items-center gap-[2px] py-2 px-4 text-gray-800 dark:text-gray-200">
                Trending Products
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>

              <div className="mt-2 ml-4">
                <ul>
                  {DropdownLinks.map((data) => (
                    <li key={data.id}>
                      
                        {data.name}
                      
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
