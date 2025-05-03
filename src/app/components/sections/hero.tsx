import Image from 'next/image';
import React from 'react';

import ContactForm from '@/components/contactForm';

const Hero: React.FC = () => {
  return (
    <div className='relative min-h-screen flex items-center'>
      {/* Background Image */}
      <Image
        src='/images/hero-image.jpg'
        alt='Hero Background'
        layout='fill'
        // objectFit='cover'
        quality={100}
        priority
      />

      {/* Overlay */}
      <div className='absolute inset-0 bg-black bg-opacity-50'></div>

      {/* Content */}
      <div className='relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex'>
        {/* Left side: Form */}
        <div className='w-full max-w-md'>
          <div className='bg-white rounded-lg p-8 shadow-lg'>
            <h2 className='text-3xl font-bold text-gray-800 mb-6'>
              Book a Cleaning
            </h2>
            <ContactForm />
          </div>
        </div>

        {/* Right side: Text */}
        <div className='flex-1 text-white ml-12 hidden lg:block'>
          <h1 className='text-5xl font-bold mb-4 leading-tight'>
            Professional House Cleaning Services
          </h1>
          <p className='text-xl mb-8'>
            Top-rated home cleaning services in Kitchener-Waterloo, Cambridge &
            Guelph
          </p>
          <div className='flex space-x-4'>
            <span className='bg-yellow-400 text-gray-800 px-4 py-2 rounded-full font-semibold'>
              ⭐ 4.7 Star Rated
            </span>
            <span className='bg-yellow-400 text-gray-800 px-4 py-2 rounded-full font-semibold'>
              🏆 Top-Rated Cleaners
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
