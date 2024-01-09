import React from 'react';
import { Link } from 'react-router-dom'

import ProjectImg from '../assets/profile.jpg';

const Card = ({ data }) => {

  return (
    <Link to='/' className='rounded-2xl h-[363px] overflow-hidden'>
      <div className='w-[300px] h-[320px]'>
        <img src={ProjectImg} alt="" className='h-full w-full object-cover' />
      </div>
      <h4 className='bg-violet text-xl text-center py-2 uppercase'>{data.name}</h4>
    </Link>
  )
}

export default Card;
