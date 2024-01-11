import React from 'react';
import Img from '../assets/profile.jpg';

const Details = () => {
  
  return (
    <div className='mb-12 mt-4'>
      <h3 className='text-violet text-4xl text-center mb-12'>Paper from Bagasse</h3>
      <div className='flex mx-4 flex-wrap gap-12 items-center justify-center'>
        <div className='sm:w-[350px] w-full sm:h-[400px] h-[450px] rounded-3xl overflow-hidden '>
          <img src={Img} alt="" className=' w-full h-full object-cover' />
        </div>
        <div className='sm:max-w-[500px] w-full font-montserrat'>
          <p className='text-xl'>Proposed By: <a href='#' className=''>Akhil</a> </p>
          <p className=' text-subMainText text-justify text-lg mt-4'>
          Papers are substances which have been use universally for writing and packaging. Paper is made using wood. Eco-friendly papers production is non-pollution process which have many advantages over conventional process such as it saves our mother earth from global warming. Handmade paper production from sugarcane is an eco-friendly and creative process that utilizes a readily available agricultural waste product: sugarcane bagasse. Bagasse is the fibrous residue left after sugar extraction from the sugarcane stalks. Instead of burning or discarding it, bagasse can be transformed into beautiful and unique sheets of paper. Bagasse is well suited for tissue, news print and writing paper.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Details
