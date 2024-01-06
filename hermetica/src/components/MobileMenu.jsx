import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { AiFillHome } from "react-icons/ai";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import { MdLocalActivity, MdOutlineSupervisorAccount } from "react-icons/md";

const MobileMenu = ({ control }) => {

  return (
    <div className='sm:hidden fixed top-20 right-0 min-w-72 h-56 overflow-hidden bg-transparent z-30'>
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
  )
}

export default MobileMenu
