import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NavigationHeader: React.FC = () => {
  return (
    <header className='bg-white shadow-md'>
      <div className='container mx-auto px-4'>
        <nav className='flex justify-between items-center h-20'>
          {/* Logo */}
          <div className='flex items-center'>
            <Link href='/'>
              <Image
                src='/images/logo.gif'
                alt='Hellamaid Logo'
                width={180}
                height={50}
                className='mr-4'
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className='hidden md:flex space-x-6'>
            <NavLink href='/'>Home</NavLink>
            <NavLink href='/about'>About</NavLink>
            <NavLink href='/services'>Services</NavLink>
            <NavLink href='/pricing'>Pricing</NavLink>
            <NavLink href='/contact'>Contact</NavLink>
          </div>

          {/* Book Appointment Button */}
          <div>
            <button className=' bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded-full transition duration-300'>
              Book Appointment
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => {
  return (
    <Link
      href={href}
      className='text-gray-800 hover:text-yellow-400 font-semibold transition duration-300'
    >
      {children}
    </Link>
  );
};

export default NavigationHeader;
