import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { AiFillHome } from "react-icons/ai";
import { FaInstagram, FaLinkedinIn, FaGithub, FaProjectDiagram } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import { MdOutlineSupervisorAccount, MdEmojiEvents } from "react-icons/md";

const MobileMenu = ({ control }) => {

  return (
    <motion.div
      animate={control}
      className='min-w-56 absolute -right-56 mr-0'
    >
      <ul className='sticky bg-iconBg text-subMainText rounded-xl overflow-hidden'>
        <li className='px-4 py-2 duration-150 hover:text-mainText hover:bg-iconbgHover'>
          <Link to='/' className='flex gap-2 items-center'>
            <AiFillHome />Home
          </Link>
        </li>
        <li className='px-4 py-2 duration-150 hover:text-mainText hover:bg-iconbgHover'>
          <Link to='/projects' className='flex gap-2 items-center'>
            <FaProjectDiagram />Projects
          </Link>
        </li>
        <li className='px-4 py-2 duration-150 hover:text-mainText hover:bg-iconbgHover'>
          <Link to='/events' className='flex gap-2 items-center'>
            <MdEmojiEvents />Events
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
  )
}

export default MobileMenu
