import React from 'react';

import Searchbar from '../components/Searchbar';
import Card from '../components/Card';
import Skeleton from '../components/Skeleton';

const Projects = () => {
  const Projects = [
    {
      id: 1,
      name: 'Paper from Baggase'
    },
    {
      id: 2,
      name: 'sdfaper from Baggase'
    },
    {
      id: 3, 
      name: 'asdfaper from Baggase'
    },
    {
      id: 4,
      name: 'hdfer from Baggase'
    },
  ]
  return (
      <div className='mb-12 mt-2'>
        <Searchbar />
        {/* <h2 className='text-center text-5xl mb-12'><span className='text-violet'>Team</span> Projects</h2> */}
        <div className='flex flex-wrap justify-center gap-6 mt-6'>
          {Projects.map((project) => {
            return (
            <Card data={project} key={project.id} />
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

export default Projects
