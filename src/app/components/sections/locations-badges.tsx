import React from 'react';

import Badge from '@/app/components/common/Badge';

export default function LocationsSection({ locations }: { locations: Link[] }) {
  return (
    <div className='flex flex-wrap gap-2 mt-16 justify-center'>
      {locations.map((item) => (
        <Badge link={item} key={item.text} />
      ))}
      <Badge
        link={{ text: 'See all locations', url: '/locations' }}
        mode='dark'
      />
    </div>
  );
}
