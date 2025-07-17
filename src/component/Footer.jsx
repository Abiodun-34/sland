import React from "react";
import footerLogo from "../assets/logo.png"; 
import Banner from "../assets/footer-pattern.jpg"; 
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";



const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%", 
  width: "100%",
};

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white pt-12 pb-8 sm:pt-16 sm:pb-12"> 
      <div className="container mx-auto px-4"> 
        <div data-aos="zoom-in" className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 sm:pb-12"> 
          {/* Company details */}
          <div className="py-4 px-0 text-center md:text-left"> 
            <h1 className="text-2xl sm:text-3xl font-bold mb-3 flex items-center justify-center md:justify-start gap-3"> 
              <img src={footerLogo} alt="Shopsy Logo" className="max-w-[40px] sm:max-w-[50px]" /> 
              Shopsy
            </h1>
            <p className="text-sm text-gray-200 leading-relaxed max-w-full mx-auto md:mx-0"> 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
              beatae ea recusandae blanditiis veritatis.
            </p>
          </div>

          {/* Footer Links - Changed to flex-wrap for better mobile layout */}
          <div className="flex flex-wrap justify-between gap-4 sm:gap-8 col-span-2 md:pl-10">
            {/* Important Links */}
            <div className="w-1/2 sm:w-auto"> 
              <div className="py-4 px-0">
                <h1 className="text-lg sm:text-xl font-bold mb-3 text-center sm:text-left"> 
                  Important Links
                </h1>
                <ul className="flex flex-col gap-2 text-center sm:text-left"> 
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200 text-sm" 
                      key={link.title}
                    >
                      <a href={link.link}>{link.title}</a> 
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Links */}
            <div className="w-1/2 sm:w-auto"> 
              <div className="py-4 px-0">
                <h1 className="text-lg sm:text-xl font-bold mb-3 text-center sm:text-left"> 
                </h1>
                <ul className="flex flex-col gap-2 text-center sm:text-left"> 
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200 text-sm" 
                      key={link.title}
                    >
                      <a href={link.link}>{link.title}</a> 
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Social links & Contact Info */}
            <div className="w-full sm:w-auto mt-4 sm:mt-0"> 
              <div className="flex items-center justify-center sm:justify-start gap-3 mb-4"> 
                <a href="#" aria-label="Instagram">
                  <FaInstagram className="text-2xl sm:text-3xl hover:text-primary duration-200" /> 
                  </a>
                <a href="#" aria-label="Facebook">
                  <FaFacebook className="text-2xl sm:text-3xl hover:text-primary duration-200" /> 
                </a>
                <a href="#" aria-label="LinkedIn">
                  <FaLinkedin className="text-2xl sm:text-3xl hover:text-primary duration-200" /> 
                </a>
              </div>
              <div className="text-center sm:text-left"> 
                <div className="flex items-center justify-center sm:justify-start gap-3 mb-2"> 
                  <FaLocationArrow className="text-lg sm:text-xl" /> 
                  <p className="text-sm sm:text-base">Noida, Uttar Pradesh</p> 
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-3"> 
                  <FaMobileAlt className="text-lg sm:text-xl" /> 
                  <p className="text-sm sm:text-base">+91 123456789</p> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Credit - Moved outside the main grid for better control */}
      <div className="text-center py-4 bg-gray-900 text-gray-400"> 
        <p className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} Designed by <span className="font-bold">Technics</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
