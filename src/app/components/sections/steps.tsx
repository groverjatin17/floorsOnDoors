import Image from 'next/image';
import React from 'react';

const STEPS_INFO = [
  {
    image_url: '/images/image1.jpg',
    alt: 'image1',
    heading: '1.BOOK ONLINE',
    subHeading:
      'Customize and book your cleaning service online. 24hr cancellation policy',
  },
  {
    image_url: '/images/image2.jpg',
    alt: 'image2',
    heading: '2. WE CLEAN',
    subHeading:
      'Your home cleaned by a professional and background checked cleaner',
  },
  {
    image_url: '/images/image3.jpg',
    alt: 'image3',
    heading: '3. YOU RELAX',
    subHeading:
      'Rate your cleaning, relax, and enjoy what matters most in Life',
  },
];
export default function Steps() {
  return (
    <div className=' mt-16 flex flex-col md:flex-row justify-evenly gap-12 md:gap-0'>
      {STEPS_INFO.map((item) => (
        <div
          className='flex flex-col justify-center items-center'
          key={item.heading}
        >
          <Image
            className='hover:animate-hop'
            src={item.image_url}
            alt={item.alt}
            width={350}
            height={350}
          />
          <h2 className='text-xl text-zinc-600'>{item.heading}</h2>
          <p className='text-center text-lg font-normal text-zinc-500 max-w-[84%]'>
            {item.subHeading}
          </p>
        </div>
      ))}
    </div>
  );
}
