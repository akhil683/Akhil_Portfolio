import React from 'react';
import { motion } from 'framer-motion';

import HeroImage from '../assets/HeroImage.png';

const Hero = () => {

  return (
  <div className='min-h-[90vh] bg-gradient-to-b from-mainBg to-iconBg flex max-sm:flex-col justify-center items-center'>

      <div className='m-6'>
        <h1 className='text-4xl md:text-6xl mb-4'>This is <span className=' text-violet'>Hermetica</span></h1>
        <p className='w-[300px] max-sm:text-sm text-subMainText'>Lorem ipsum dolor sit amet consectetur</p>
      </div>

      <motion.div 
        className='m-6'
        drag
        dragConstraints={{
          right: 20,
          left: -20,
          top: 20,
          bottom: 5
        }}
        whileHover={{
          scale: 1.1,
        }}
        transition={{
          type: 'spring',
          duration: 0.4,
        }}
      >
        <img src={HeroImage} className='sm:w-[500px] w-[350px]' alt="" />
      </motion.div>
    </div>

  )
}

export default Hero
