import React from 'react';
import customer1 from '../assets/photo-1500648767791-00dcc994a43e.avif';
import customer2 from '../assets/photo-1534528741775-53994a69daeb.avif';
import customer3 from '../assets/photo-1494790108377-be9c29b29330.avif';

const CustomerSection = () => {
  return (
    <section className="py-24 bg-[#F9FAFB]">
      {/* Title */}
      <div className="text-center space-y-4">
        <h1
          className="text-3xl font-semibold"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          Featured Birds
        </h1>
        <p
          className="text-[#4B5563]"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          Discover our handpicked collection of stunning birds from trusted breeders
          worldwide.
        </p>
      </div>

      {/* Customer Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 p-6 text-[#374151] mt-10">
        {/* Customer 1 */}
        <div className="p-6 shadow-md bg-white rounded-md space-y-4">
          <div className="flex items-start space-x-1">
            <div className="text-yellow-400 flex" data-aos="zoom-in-down">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <span data-aos="zoom-in-down">5.0</span>
          </div>
          <p
            className="text-md"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            "I purchased a Quaker parrot through BirdMart and couldn't be happier! The seller was
            knowledgeable, and the bird arrived healthy and well-socialized. The post-purchase
            support has been exceptional!"
          </p>
          <div className="flex items-start space-x-3">
            <img
              src={customer1}
              alt="photo"
              className="w-12 h-12 object-cover rounded-full"
            />
            <div className="flex flex-col text-sm">
              <h1 className="font-semibold" data-aos="zoom-in-right">sndp bag</h1>
              <p data-aos="zoom-in-left">Professional Breeder</p>
            </div>
          </div>
        </div>

        {/* Customer 2 */}
        <div className="p-6 shadow-md bg-white rounded-md space-y-4">
          <div className="flex items-start space-x-1">
            <div className="text-yellow-400 flex">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <span data-aos="zoom-in-right">5.0</span>
          </div>
          <p
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            "As a breeder, I've tried several platforms to sell my canaries, but BirdMart stands out
            for its professionalism and dedicated customer base. My birds find loving homes quickly!"
          </p>
          <div className="flex items-start space-x-3">
            <img
              src={customer2}
              alt="photo"
              className="w-12 h-12 object-cover rounded-full"
            />
            <div className="flex flex-col text-sm">
              <h1 className="font-semibold" data-aos="zoom-in-right">Sonali Halder</h1>
              <p data-aos="zoom-in-left">First-time Bird Owner</p>
            </div>
          </div>
        </div>

        {/* Customer 3 */}
        <div className="p-6 shadow-md bg-white rounded-md space-y-4">
          <div className="flex items-start space-x-1">
            <div className="text-yellow-400 flex">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
            <span data-aos="zoom-in-right">4.5</span>
          </div>
          <p
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            "The expert advice I received before purchasing my first cockatiel was invaluable. The
            seller took time to educate me on proper care, and now my bird is thriving. Highly
            recommend!"
          </p>
          <div className="flex items-start space-x-3">
            <img
              src={customer3}
              alt="photo"
              className="w-12 h-12 object-cover rounded-full"
            />
            <div className="flex flex-col text-sm">
              <h1 className="font-semibold" data-aos="zoom-in-left">Riya Hoodati</h1>
              <p data-aos="zoom-in-right">Bird Owner, 2 years</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSection;
