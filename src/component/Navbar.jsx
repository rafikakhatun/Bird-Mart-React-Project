import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md w-full py-4 px-6 fixed z-50">
      <nav className="flex justify-between items-center">
        
        {/* Logo */}
        <div className="space-x-2 flex justify-center items-center">
          <i className="fa-solid fa-feather text-[#3B81F6] text-2xl"></i>
          <span
            className="text-[#2463EB] text-xl font-semibold"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            BirdMart
          </span>
        </div>

        {/* Nav Menu */}
        <div>
          <ul className="hidden space-x-4 md:flex">
            <li className="text-gray-700 text-md hover:text-[#3B81F6]"><a href="#">Home</a></li>
            <li className="text-gray-700 text-md hover:text-[#3B81F6]"><a href="#">Featured Birds</a></li>
            <li className="text-gray-700 text-md hover:text-[#3B81F6]"><a href="#">Services</a></li>
            <li className="text-gray-700 text-md hover:text-[#3B81F6]"><a href="#">Testimonials</a></li>
            <li className="text-gray-700 text-md hover:text-[#3B81F6]"><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Button */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <button className="py-2 px-5 rounded-4xl bg-[#3B81F6] text-white">
            Login/Register
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
