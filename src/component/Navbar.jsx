import logo from "../assets/logo.png";
import { IoSearchSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Electronics",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];



const Navbar = () => {
  return (
    <>
      {/* Upper Navbar */}
      <nav className="sticky bg-primary/40 shadow-md top-0 py-3 backdrop-blur-lg border-neutral-700 duration-200 z-40">
        <div className="container px-4 mx-auto relative lg:text-sm">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center flex-shrink-0">
              <img className="h-10 w-10 px-0 ml-0 py-0" src={logo} alt="logo" />
              <span className="text-2xl bg-gradient-to-r font-serif font-bold text-orange-600 tracking-tight">
                ShopMe
              </span>
            </div>

            {/* Search Box */}
            <div className="flex justify-between items-center gap-12">
              <div className="relative group hidden sm:block">
                <input
                  type="text"
                  placeholder="search"
                  className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all rounded-full duration-300 border-gray-300 px-2 py-1 focus:outline-none focus:border-1"
                />
                <IoSearchSharp className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
              </div>

              {/* Order Button */}
              <button
                onClick={() => alert("Ordering not available yet")}
                className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
              >
                <span className="group-hover:block hidden transition-all duration-200">
                  Order
                </span>
                <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>

              <div>
                <DarkMode />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Lower Navbar */}
      <div className="py-2 shadow-md shadow-gray-300 flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
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
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
