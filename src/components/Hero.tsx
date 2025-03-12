import React from 'react';
import { images } from '../config/cloudinary.ts'

const Hero = () => {
  return (
    <div id="home" className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            `url(${images.chat1})`,
        }}
      >
        <div className="absolute inset-0 bg-[#002B3D] bg-opacity-75"></div>
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Welcome to Test Community Kenya
          </h1>
          <p className="text-xl text-white mb-8 animate-slide-up">
            Empowering QA professionals and testers through knowledge sharing
            and collaboration
          </p>
          <a
            href="#activities"
            className="inline-block bg-[#FFA726] text-[#002B3D] px-8 py-3 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-all animate-bounce"
          >
            Explore Our Events
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
