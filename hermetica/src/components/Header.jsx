import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { CiMenuFries } from "react-icons/ci";
import { IoIosArrowForward, IoMdInformationCircle } from "react-icons/io";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { MdLocalActivity, MdOutlineSupervisorAccount } from "react-icons/md";

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
      }})
  }

  return (
    <nav className='flex sm:justify-around justify-between sticky top-0 items-center p-4 overflow-hidden'>

      <Link to='/'  className='bg-iconBg px-4 py-2 rounded-full duration-200 my-auto hover:bg-iconbgHover hover:scale-110'>
        <span className='sm:text-xl'>Hermetica</span>
      </Link>

      <ul className='sm:flex hidden bg-iconBg text-subMainText py-1 rounded-full'>
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

      <div onClick={toggleMenu} className='sm:hidden flex gap-2 px-4 py-3 group text-subMainText bg-iconBg duration-200 hover:bg-iconbgHover hover:scale-105 rounded-full cursor-pointer'>
        <CiMenuFries />
        <IoIosArrowForward className={`group-hover:text-mainText transition duration-200 ${showMenu ? 'rotate-180' : ''}`}/>
      </div>

      <div className='absolute sm:hidden  top-20 right-0 min-w-72 h-56 overflow-hidden bg-transparent'>
        <motion.div
          animate={control}
          className='min-w-48 absolute -right-48 mr-0'
        >
          <ul className='sticky bg-iconBg text-subMainText rounded-xl overflow-hidden'>
            <li className='px-4 py-2 duration-150 hover:text-mainText hover:bg-iconbgHover'>
              <Link to='/' className='flex gap-2 items-center'>
                <AiFillHome />Home
              </Link>
            </li>
            <li className='px-4 py-2 duration-150 hover:text-mainText hover:bg-iconbgHover'>
              <Link to='/activities' className='flex gap-2 items-center'>
                <MdLocalActivity />Activity
              </Link>
            </li>
            <li className='px-4 py-2 duration-150 hover:text-mainText hover:bg-iconbgHover'>
              <Link to='/members' className='flex gap-2 items-center'>
                <MdOutlineSupervisorAccount />Members
              </Link>
            </li>
            <li className='px-4 py-2 duration-150 hover:text-mainText hover:bg-iconbgHover'>
              <Link to='/about' className='flex gap-2 items-center'>
                <IoMdInformationCircle />About
              </Link>
            </li>
            <hr className=' opacity-30 my-1' />

            <li className='px-4 pt-1 pb-2 flex justify-around text-xl'>
              <span className='social-icon'><FaLinkedinIn /></span>
              <span className='social-icon'><FaInstagram /></span>
              <span className='social-icon'><FaGithub /></span>
            </li>
          </ul>
        </motion.div>
        </div>
    </nav>
  )
}
export default Header
