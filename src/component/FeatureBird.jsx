import bird1 from '../assets/photo-1552728089-57bdde30beb3.avif';
import bird2 from '../assets/photo-1666218863086-329c0a7f2f7d.avif';
import bird3 from '../assets/istockphoto-2124787403-1024x1024.jpg';
import bird4 from '../assets/images (2).jpeg';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const FeatureBird = () => {
  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-semibold" data-aos="flip-up">
          Featured Birds
        </h1>
        <p className="text-[#4B5563]" data-aos="flip-up">
          Discover our handpicked collection of stunning birds from trusted breeders worldwide.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 mt-10">
        <div className="shadow-md rounded-md overflow-hidden">
          <div className="h-56 overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              src={bird1}
              alt="Blue and Gold Macaw"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            />
          </div>
          <div className="p-6 space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold" data-aos="fade-left">
                Blue and Gold Macaw
              </p>
              <span className="text-[#3B81F6] font-semibold" data-aos="fade-left">
                1,200
              </span>
            </div>
            <p className="text-[#4B5563] text-md" data-aos="fade-left">
              Friendly, hand-raised macaw with vibrant plumage. Great talker!
            </p>
            <div className="flex justify-between">
              <div className="flex items-center space-x-2 mt-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#4B5563] text-sm" />
                <p className="text-[#4B5563] text-sm" data-aos="fade-left">
                  New York
                </p>
              </div>
              <button className="bg-[#3B81F6] hover:bg-[#2463EB] rounded-4xl py-2 px-3 text-white text-sm" data-aos="fade-right">
                View Details
              </button>
            </div>
          </div>
        </div>

        <div className="shadow-md rounded-md overflow-hidden">
          <div className="h-56 overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              src={bird2}
              alt="Sulphur-Crested Cockatoo"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            />
          </div>
          <div className="p-6 space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold" data-aos="fade-left">
                Sulphur-Crested Cockatoo
              </p>
              <span className="text-[#3B81F6] font-semibold" data-aos="fade-left">
                1,500
              </span>
            </div>
            <p className="text-[#4B5563] text-md" data-aos="fade-left">
              Playful and affectionate cockatoo with impressive yellow crest.
            </p>
            <div className="flex justify-between">
              <div className="flex items-center space-x-2 mt-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#4B5563] text-sm" />
                <p className="text-[#4B5563] text-sm" data-aos="fade-left">
                  Los Angeles
                </p>
              </div>
              <button className="bg-[#3B81F6] hover:bg-[#2463EB] rounded-4xl py-2 px-3 text-white text-sm" data-aos="fade-right">
                View Details
              </button>
            </div>
          </div>
        </div>

        <div className="shadow-md rounded-md overflow-hidden">
          <div className="h-56 overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              src={bird3}
              alt="Gold Macaw"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            />
          </div>
          <div className="p-6 space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold" data-aos="fade-left">
                Gold Macaw
              </p>
              <span className="text-[#3B81F6] font-semibold" data-aos="fade-left">
                850
              </span>
            </div>
            <p className="text-[#4B5563] text-md" data-aos="fade-left">
              Beautiful pair of breeding zebra finches with melodious songs.
            </p>
            <div className="flex justify-between">
              <div className="flex items-center space-x-2 mt-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#4B5563] text-sm" />
                <p className="text-[#4B5563] text-sm" data-aos="fade-left">
                  Chicago
                </p>
              </div>
              <button className="bg-[#3B81F6] hover:bg-[#2463EB] rounded-4xl py-2 px-3 text-white text-sm" data-aos="fade-right">
                View Details
              </button>
            </div>
          </div>
        </div>

        <div className="shadow-md rounded-md overflow-hidden">
          <div className="h-56 overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              src={bird4}
              alt="Yellow Canary"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            />
          </div>
          <div className="p-6 space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold" data-aos="fade-left">
                Yellow Canary
              </p>
              <span className="text-[#3B81F6] font-semibold" data-aos="fade-left">
                120
              </span>
            </div>
            <p className="text-[#4B5563] text-md" data-aos="fade-left">
              Vibrant male canary with exceptional singing ability. Perfect for beginners.
            </p>
            <div className="flex justify-between">
              <div className="flex items-center space-x-2 mt-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#4B5563] text-sm" />
                <p className="text-[#4B5563] text-sm" data-aos="fade-left">
                  Miami
                </p>
              </div>
              <button className="bg-[#3B81F6] hover:bg-[#2463EB] rounded-4xl py-2 px-3 text-white text-sm" data-aos="fade-right">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-6">
        <button className="bg-[#3B81F6] hover:bg-[#2463EB] rounded-4xl py-2 px-3 text-white text-lg">
          View All Birds →
        </button>
      </div>
    </section>
  );
};

export default FeatureBird;
