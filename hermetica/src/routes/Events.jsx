import React from 'react';

import Searchbar from '../components/Searchbar';
import Card from '../components/Card';
import Skeleton from '../components/Skeleton';

const Events = () => {
  const Events = [
    {
      id: 1,
      name: 'Paper ggase'
    },
    {
      id: 2,
      name: 'sdfaper m Baggase'
    },
    {
      id: 3, 
      name: 'asdf erfrom ase'
    },
    {
      id: 4,
      name: 'fer fom Baggase'
    },
  ]
  return (
      <div className='mb-12 mt-2'>
        <Searchbar />
        {/* <h2 className='text-center text-5xl mb-12'><span className='text-violet'>Team</span> Projects</h2> */}
        <div className='flex flex-wrap justify-center gap-6 mt-6'>
          {Events.map((event) => {
            return (
              <Card data={event} key={event.id} />
              )})}
        </div>
        <div className='flex flex-wrap justify-center gap-6'>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
      </div>
  )
}

export default Events;
