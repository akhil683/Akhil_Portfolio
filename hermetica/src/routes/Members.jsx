import React, { useEffect } from 'react';
import Profile from '../assets/profile.jpg';
import MemberCard from '../components/MemberCard';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Members = () => {
  const Members = [
    {
      id: 1,
      name: 'Akhil',
      position: 'Executive Member',
      imageURL: Profile,
    },
    {
      id: 2,
      name: 'Shivansh',
      position: 'Executive Member',
      imageURL: Profile,
    },
    {
      id: 3,
      name: 'Rishu',
      position: 'Executive Member',
      imageURL: Profile,
    },
    {
      id: 4,
      name: 'Dheeraj',
      position: 'Executive Member',
      imageURL: Profile,
    },
  ]

  const cursorSize = 20;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  }
  const smoothOptions = { damping: 50, stiffness: 200, mass: 0.2 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  }
  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize);
    mouse.y.set(clientY - cursorSize);
  }

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove)
    return () => {window.removeEventListener("mousemove",manageMouseMove)}
  });

  return (
    <div className='m-4'>
      <div>
        <div className='flex flex-wrap justify-center gap-4'>
          {Members.map((member) => {
            return (
              <MemberCard member={member} key={member.id} />
            )})}
        </div>

        <motion.div 
          className='w-56 fixed mt-6 font-semibold max-sm:hidden  pointer-events-none'
          style={{left: smoothMouse.x, top: smoothMouse.y}}
        >
                <div className='flex gap-4 text-center'>
                  <div className='w-10 bg-transparent border-2 border-mainText rounded-full'></div>
                  <p className='py-2 px-6 rounded-full bg-mainText text-mainBg'>Akhil</p>
                </div>
                <div className='pt-2 backdrop-blur-md mt-4 bg-iconbgHover rounded-md'>
                    <div className='p-2 bg-iconBg rounded'>
                      <span>Executive Member</span>
                      <p className=' font-normal text-sm leading-tight text-subMainText text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut accusamus temporibus ratione minus? Natus sit id earum inventore commodi, repellat aliquam dicta pariatur omnis ex aut labore nesciunt consetur ut?</p>
                    </div>
                </div>
              </motion.div>
      </div>
    </div>
  )
}

export default Members
