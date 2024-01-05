import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { CiMenuFries } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

import { motion, useAnimation } from 'framer-motion';

const Header = () => {

  const control = useAnimation();

  const [ showMenu, setShowMenu ] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);

    let xValue;
    if(showMenu) {
      xValue = 220;
    } else {
      xValue = -220;
    }
    control.start({
      x: xValue,
      transition: { 
        duration: 0.1,
        type: 'spring',
        stiffness: 80,
        damping: 10,
      }
    })

  }

  return (
    <nav className='flex sm:justify-around justify-between stick items-center overflow-hidden'>

      <Link to='/'  className='bg-iconBg px-4 py-2 rounded-full duration-200 my-auto hover:bg-iconbgHover hover:scale-110'>
        <span className='sm:text-xl'>Hermetica</span>
      </Link>

      <ul className='sm:flex hidden sticky bg-iconBg text-subMainText py-1 rounded-full'>
        <li className='px-4 py-2 nav-hover'>
          <Link to='/'>Home</Link>
        </li>
        <li className='px-4 py-2 nav-hover'>
          <Link to='/activities'>Activity</Link>
        </li>
        <li className='px-4 py-2 nav-hover'>
          <Link to='/members'>Members</Link>
        </li>
        <li className='px-4 py-2 nav-hover'>
          <Link to='/about'>About</Link>
        </li>
      </ul>
      
      <div onClick={toggleMenu} className='sm:hidden flex gap-2 px-4 py-3 group text-subMainText bg-iconBg duration-200 hover:bg-iconbgHover rounded-full cursor-pointer'>
        <CiMenuFries />
        <IoIosArrowForward className={`group-hover:text-mainText transition duration-200 ${showMenu ? 'rotate-180' : ''}`}/>
      </div>

        <motion.div
          animate={control}
          className='absolute top-20 -right-48 min-w-48'
        >
          <ul className='sticky text-sm bg-iconBg text-subMainText py-1 rounded-xl'>
            <li className='px-4 py-2 hover:text-mainText'>
              <Link to='/'>Home</Link>
            </li>
            <li className='px-4 py-2'>
              <Link to='/activities'>Activity</Link>
            </li>
            <li className='px-4 py-2'>
              <Link to='/members'>Members</Link>
            </li>
            <li className='px-4 py-2'>
              <Link to='/about'>About</Link>
            </li>
            <hr className=' opacity-30 my-1' />

            <li className='px-4 py-2 flex gap-2 justify-around text-xl'>
              <span className='p-2 cursor-pointer bg-mainBg hover:text-mainText rounded-full'><FaLinkedinIn /></span>
              <span className='p-2 cursor-pointer bg-mainBg hover:text-mainText rounded-full'><FaInstagram /></span>
              <span className='p-2 cursor-pointer bg-mainBg hover:text-mainText rounded-full'><FaGithub /></span>
            </li>

          </ul>
        </motion.div>
    </nav>
  )
}

export default Header
