import React, { useEffect, useState, useRef } from 'react';

import { motion, useMotionValue, useSpring, useScroll } from 'framer-motion';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const MemberCard = ({ member }) => {

  const {name, imageURL, position} = member;
  // const [ isHovered, setIsHovered ] = useState(false);

  // const MemberInfoElement = useRef(null);

//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["-3 1", '1.2 1'],
//   })

//   //cursor animation
//   const cursorSize = 20;
//   const mouse = {
//     x: useMotionValue(0),
//     y: useMotionValue(0),
//   }
//   const smoothOptions = { damping: 50, stiffness: 200, mass: 0.2 };
//   const smoothMouse = {
//     x: useSpring(mouse.x, smoothOptions),
//     y: useSpring(mouse.y, smoothOptions),
//   }

// const manageMouseOver = () => {
//   setIsHovered(true);
// }
// const manageMouseLeave = () => {
//   setIsHovered(false);
// }
// const manageMouseMove = (e) => {
//   const { clientX, clientY } = e;
//   mouse.x.set(clientX + cursorSize);
//   mouse.y.set(clientY + cursorSize);
// }

// useEffect(() => {
//   window.addEventListener("mousemove", manageMouseMove);
//   ref.current.addEventListener("mousemove", manageMouseOver);
//   ref.current.addEventListener("mousemove", manageMouseLeave);
//   return () => {
//     window.removeEventListener("mousemove",manageMouseMove)
//     ref.current.removeEventListener("mousemove", manageMouseOver);
//     ref.current.removeEventListener("mousemove", manageMouseLeave);
// }
// });

  return (
  <div className='flex flex-col max-sm:ful'>
        <motion.div 
          // ref={ref} 
          // style={{
            //   scale: scrollYProgress,
            //   opacity: scrollYProgress,
            // }}
          className='relative group overflow-hidden hover:shadow-lg duration-500 hover:scale-105 hover:shadow-iconbgHover'
          >
          <div className='absolute flex gap-2 left-2 top-12 z-20 group-hover:top-2 opacity-0 group-hover:opacity-100 duration-500'>
            <span className='p-3 text-xl hover:bg-iconBg rounded-full bg-iconbgHover hover:text-violet hover:shadow-iconbgHover hover:shadow-md hover:scale-110 cursor-pointer duration-300'><FaInstagram /></span>
            <span className='p-3 text-xl hover:bg-iconBg rounded-full bg-iconbgHover hover:text-violet hover:shadow-iconbgHover hover:shadow-md hover:scale-110 cursor-pointer duration-300'><FaLinkedinIn /></span>
          </div>
          <div className='absolute left-4 -bottom-12 text-iconBg font-semibold group-hover:bottom-2 duration-500 z-20'>
            <span className='px-4 py-2 rounded-full bg-mainText duration-200 opacity-60 group-hover:opacity-100'>{name}</span>
            <p className='px-4 py-2 mt-6 group-hover:mt-4 rounded-full bg-mainText duration-500 opacity-100 group-hover:opacity-100'>{position}</p>
          </div>
          <div className='sm:w-64 w-full sm:h-72 bg-violet rounded-2xl overflow-hidden'>
            <img className='w-full sm:h-full object-cover group-hover:scale-125 duration-500' src={imageURL} alt="" />
          </div>
        </motion.div>
{/* 
        <motion.div 
        className='w-56 mt-6 fixed font-semibold max-sm:hidden'
        style={{left: smoothMouse.x, top: smoothMouse.y}}
        >
        <div className='flex gap-4 text-center'>
        <div className='w-10 bg-transparent border-2 border-mainText rounded-full'></div>
        <p className='py-2 px-6 rounded-full bg-mainText text-mainBg'>{name}</p>
        </div>
        <div className='pt-2 backdrop-blur-md mt-4 bg-iconbgHover rounded-md'>
        <div className='p-2 bg-iconBg rounded'>
        <span>{position}</span>
        <p className=' font-normal text-sm leading-tight text-subMainText text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut accusamus temporibus ratione minus? Natus sit id earum inventore commodi, repellat aliquam dicta pariatur omnis ex aut labore nesciunt consetur ut?</p>
        </div>
        </div>
      </motion.div> */}
      </div>
  )
}

export default MemberCard
