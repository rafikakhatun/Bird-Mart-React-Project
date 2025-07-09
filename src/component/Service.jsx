import birdSeller from '../assets/photo-1555169062-013468b47731.avif';
import { faCertificate, faStethoscope, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Service = () => {
  return (
    <section className="py-24">
      {/* Title */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-semibold" data-aos="fade-left">Our Services</h1>
        <p className="text-[#4B5563]" data-aos="flip-right">
          We provide comprehensive services to ensure the health and happiness of your feathered friends.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 p-4 mt-10">
        {/* Service 1 */}
        <div className="p-8 text-center shadow-md rounded-md bg-[#F9FAFB] space-y-6">
          <FontAwesomeIcon icon={faCertificate} className="text-blue-500 text-3xl" />
          <h1 className="text-xl font-semibold" data-aos="fade-right">Verified Breeders</h1>
          <p
            className="text-[#4B5563]"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            All our breeders undergo strict verification process to ensure ethical breeding practices and healthy birds.
          </p>
        </div>

        {/* Service 2 */}
        <div className="p-8 text-center shadow-md rounded-md bg-[#F9FAFB] space-y-6">
          <FontAwesomeIcon icon={faTruck} className="text-blue-500 text-3xl" />
          <h1 className="text-xl font-semibold" data-aos="fade-right">Safe Delivery</h1>
          <p
            className="text-[#4B5563]"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            We offer specialized bird transportation services with climate-controlled vehicles and expert handlers.
          </p>
        </div>

        {/* Service 3 */}
        <div className="p-8 text-center shadow-md rounded-md bg-[#F9FAFB] space-y-6">
          <FontAwesomeIcon icon={faStethoscope} className="text-blue-500 text-3xl" />
          <h1 className="text-xl font-semibold" data-aos="fade-right">Veterinary Support</h1>
          <p
            className="text-[#4B5563]"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            Access to our network of avian veterinarians for health checks, consultations, and emergency care.
          </p>
        </div>
      </div>

      {/* Apply Now Section */}
      <div className="mt-16 bg-blue-500 rounded-xl overflow-hidden shadow-xl">
        <div className="flex flex-col md:flex-row">
          {/* Text Content */}
          <div className="md:w-1/2 p-10 flex items-center">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-4" data-aos="fade-left">Become a Verified Seller</h3>
              <p className="mb-6" data-aos="fade-right">
                Join our community of trusted bird sellers and reach thousands of potential buyers worldwide.
                Enjoy premium features and dedicated support.
              </p>
              <button
                className="bg-white text-blue-500 hover:bg-gray-100 px-6 py-3 rounded-full font-medium shadow-md transition"
                data-aos="fade-left"
              >
                Apply Now
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={birdSeller}
              alt="Bird Seller"
              className="w-full h-full object-cover"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
