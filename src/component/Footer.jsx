import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFeather, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#1F2937] py-10 px-10 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div className="flex flex-col space-y-4" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
          <div className="space-x-2 flex items-center">
            <FontAwesomeIcon icon={faFeather} className="text-[#3B81F6] text-2xl" />

            <span className="text-white text-xl font-semibold mb-2">BirdMart</span>
          </div>
          <p className="text-gray-400 text-md">
            The premier marketplace for exotic birds, connecting passionate breeders with loving homes since 2010.
          </p>
          {/* Social Icons */}
          <div className="flex flex-row gap-3 text-lg">
            <FontAwesomeIcon icon={faFacebook} className="text-gray-400 hover:text-white" />
            <FontAwesomeIcon icon={faTwitter} className="text-gray-400 hover:text-white" />
            <FontAwesomeIcon icon={faInstagram} className="text-gray-400 hover:text-white" />
            <FontAwesomeIcon icon={faYoutube} className="text-gray-400 hover:text-white" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col text-gray-300 space-y-2" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
          <h1 className="text-white font-semibold text-lg">Quick Links</h1>
          <ul className="space-y-3 mt-2">
            <li className="text-gray-400 hover:underline"><a href="#">About Us</a></li>
            <li className="text-gray-400 hover:underline"><a href="#">Bird Care Guides</a></li>
            <li className="text-gray-400 hover:underline"><a href="#">Seller Requirements</a></li>
            <li className="text-gray-400 hover:underline"><a href="#">Success Stories</a></li>
            <li className="text-gray-400 hover:underline"><a href="#">FAQs</a></li>
          </ul>
        </div>

        {/* Bird Categories */}
        <div className="flex flex-col text-gray-300" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
          <h1 className="text-white font-semibold text-lg">Bird Categories</h1>
          <ul className="space-y-3 mt-3">
            <li className="text-gray-400 hover:underline"><a href="#">Parrots & Macaws</a></li>
            <li className="text-gray-400 hover:underline"><a href="#">Finches & Canaries</a></li>
            <li className="text-gray-400 hover:underline"><a href="#">Cockatiels & Budgies</a></li>
            <li className="text-gray-400 hover:underline"><a href="#">Doves & Pigeons</a></li>
            <li className="text-gray-400 hover:underline"><a href="#">Exotic Species</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col text-gray-300 space-y-4" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
          <h1 className="text-white font-semibold text-lg">Newsletter</h1>
          <p className="text-gray-400">Subscribe to our newsletter for bird care tips and exclusive offers.</p>
          <div className="flex mt-2">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 w-full rounded-l-md bg-white focus:outline-none text-gray-800"
            />
            <button type="submit" className="text-gray-400 px-4 py-2 rounded-r-md bg-[#342F91]">
              <FontAwesomeIcon icon={faPaperPlane} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex justify-between items-center py-6 border-t border-[#4B5563] mt-6 text-gray-300">
        <p className="text-gray-400">© 2025 LegalCounsel. All rights reserved.</p>
        <div className="flex text-gray-400 space-x-4">
          <a className="text-gray-400 hover:text-white" href="#">Privacy Policy</a>
          <a className="text-gray-400 hover:text-white" href="#">Terms of Service</a>
          <a className="text-gray-400 hover:text-white" href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
