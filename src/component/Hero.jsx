import React from 'react';
import bgImage from '../assets/what-is-the-spiritual-meaning-of-a-cardinal-51bea77a.jpg'; // ✅ image import

const Hero = () => {
    return (
        <section
            className="py-24 px-4 text-white bg-cover bg-center"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            style={{
                backgroundImage: `url(${bgImage})`, // ✅ imported image used here
            }}
        >
            <div className="text-center mt-32 space-y-5">
                <h1
                    className="text-3xl font-semibold md:text-5xl"
                    data-aos="fade-down-left"
                >
                    Find Your Perfect Feathered Companion
                </h1>
                <p className="text-xl">
                    The premier marketplace for buying and selling exotic birds with expert
                    <br className="hidden md:flex" />
                    care advice and top-quality services.
                </p>
            </div>

            <div className="flex justify-center items-center mt-10 space-x-4">
                <button
                    className="text-lg py-3 px-5 rounded-4xl bg-[#3B81F6] hover:bg-[#2463EB] font-medium"
                    data-aos="fade-down-left"
                >
                    Explore Birds
                </button>
                <button
                    className="text-lg py-3 px-4 rounded-4xl bg-transparent hover:text-[#2463EB] hover:bg-white border-2 font-medium border-white"
                >
                    Sell Your Birds
                </button>
            </div>
        </section>
    );
};

export default Hero;
