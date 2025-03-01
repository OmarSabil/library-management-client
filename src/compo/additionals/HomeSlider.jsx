import React from "react";

const HomeSlider = () => {
  // Background image URLs for each slide
  const slideImages = [
    "https://cdn.pixabay.com/photo/2022/08/24/15/42/library-7408106_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/10/22/17/28/stack-of-books-1001655_1280.jpg",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  ];

  return (
    <div className="carousel w-full">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <div
          className="relative h-96 bg-cover bg-center w-full"
          style={{ backgroundImage: `url(${slideImages[0]})` }} // Dynamic URL for background image
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
                Access thousands of e-books, audiobooks, and journals anytime,
                anywhere. Explore our digital collection and dive into a world
                of knowledge.
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

        {/* Navigation Arrows */}
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <div
          className="relative h-96 bg-cover bg-center w-full"
          style={{ backgroundImage: `url(${slideImages[1]})` }} // Dynamic URL for background image
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
                Access thousands of e-books, audiobooks, and journals anytime,
                anywhere. Explore our digital collection and dive into a world
                of knowledge.
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

        {/* Navigation Arrows */}
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <div
          className="relative h-96 bg-cover bg-center w-full"
          style={{ backgroundImage: `url(${slideImages[2]})` }} // Dynamic URL for background image
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
                Access thousands of e-books, audiobooks, and journals anytime,
                anywhere. Explore our digital collection and dive into a world
                of knowledge.
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

        {/* Navigation Arrows */}
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full">
        <div
          className="relative h-96 bg-cover bg-center w-full"
          style={{ backgroundImage: `url(${slideImages[3]})` }} // Dynamic URL for background image
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
                Access thousands of e-books, audiobooks, and journals anytime,
                anywhere. Explore our digital collection and dive into a world
                of knowledge.
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

        {/* Navigation Arrows */}
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;