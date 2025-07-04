import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';


export const GetInTouchSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row rounded-xl overflow-hidden shadow-xl">
                        {/* Left Panel - Contact Info */}
                        <div className="md:w-1/2 bg-blue-500 text-white p-10">
                            <h2 className="text-3xl font-bold mb-6" data-aos="zoom-in-right">Get In Touch</h2>
                            <p className="mb-8" data-aos="zoom-in-left">
                                Have questions about our birds or services? We're here to help!
                                Fill out the form and we'll get back to you shortly.
                            </p>

                            {/* Address */}
                            <div className="mb-6 flex items-center" data-aos="zoom-in-right">
                                <div className="bg-blue-400 p-3 rounded-full mr-4">
                                    <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                                </div>
                                <span>Amtala, Dakshin Gouripur, 743503</span>
                            </div>

                            {/* Phone */}
                            <div className="mb-6 flex items-center" data-aos="zoom-in-left">
                                <div className="bg-blue-400 p-3 rounded-full mr-4">
                                    <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                                </div>
                                <span>+91 7980048890</span>
                            </div>

                            {/* Email */}
                            <div className="mb-6 flex items-center" data-aos="zoom-in-right">
                                <div className="bg-blue-400 p-3 rounded-full mr-4">
                                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                </div>
                                <span>sndpbagg@gmail.com</span>
                            </div>

                            {/* Social Icons */}
                            <div className="flex space-x-4 mt-10" data-aos="fade-right">
                                <a href="#" className="bg-white text-blue-500 p-4 rounded-full hover:bg-blue-100">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a href="#" className="bg-white text-blue-500 p-4 rounded-full hover:bg-blue-100">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="#" className="bg-white text-blue-500 p-4 rounded-full hover:bg-blue-100">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href="#" className="bg-white text-blue-500 p-4 rounded-full hover:bg-blue-100">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </a>
                            </div>
                        </div>

                        {/* Right Panel - Form */}
                        <div
                            className="bg-gray-50 p-10 md:w-1/2"
                            data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                        >
                            <form className="space-y-5">
                                {/* Name */}
                                <div className="mt-4">
                                    <label className="text-gray-700" htmlFor="name">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
                                    />
                                </div>

                                {/* Email */}
                                <div className="mt-7">
                                    <label className="text-gray-700" htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
                                    />
                                </div>

                                {/* Subject */}
                                <div className="mt-7">
                                    <label className="text-gray-700" htmlFor="subject">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
                                    />
                                </div>

                                {/* Message */}
                                <div className="mt-7">
                                    <label className="text-gray-700" htmlFor="message">Message</label>
                                    <textarea
                                        rows="5"
                                        id="message"
                                        className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
                                    ></textarea>
                                </div>

                                {/* Button */}
                                <button
                                    type="submit"
                                    className="bg-blue-500 mt-4 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition shadow-md w-full"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

{/* export default GetInTouchSection;
*/}