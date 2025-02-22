import React from 'react';

const Banner = () => {
  // Replace this URL with your desired background image link
  const backgroundImageUrl = "https://cdn.pixabay.com/photo/2022/08/24/15/42/library-7408106_1280.jpg";

  return (
    <div
      className="relative h-96 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }} // Dynamic URL for background image
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content Container */}
      <div className="absolute inset-0 flex items-end py-8 px-20">
        {/* Left Side: Title and Description */}
        <div className="w-2/3 pr-4">
          <h1 className="text-4xl font-bold text-yellow-500 mb-2">
            Virtual Library
          </h1>
          <p className="text-sm font-light text-yellow-600 max-w-xl">
            Access thousands of e-books, audiobooks, and journals anytime, anywhere. Explore our digital collection and dive into a world of knowledge.
          </p>
        </div>

        {/* Right Side: Button */}
        <div className="w-1/3 flex justify-end items-end">
          <button className="bg-yellow-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Take it
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;