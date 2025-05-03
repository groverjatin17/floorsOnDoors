import Link from 'next/link';
import React from 'react';

export default function Badge({
  link,
  mode = 'default',
}: {
  link: Link;
  mode?: string;
}) {
  return (
    <div
      className={`
      hover:bg-primary-300
      hover:transition-all 
      hover:duration-300 
      hover:ease-in-out 
      hover:delay-0 
      border-2 
      border-solid 
      py-1
      px-3
      font-medium
      text-badge
      font-openSans
      tracking-[.7px]
      ${
        mode === 'dark'
          ? 'text-white bg-dark border-dark hover:border-primary-500'
          : 'border-primary-500'
      }
      `}
    >
      <Link href={link.url} className='whitespace-nowrap'>
        {link.text}
      </Link>
    </div>
  );
}
