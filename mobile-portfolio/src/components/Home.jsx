import React from 'react'
import bgImg from '../assets/mainBg.jpg';

const Home = () => {
  return (
    <main className='w-screen h-screen p-4 bg-red-500'>
      <div className='absolute inset-0'>
        <img src={bgImg} alt="" className='w-full h-full object-cover' />
      </div>
      <div className='relative text-white'>
        <div className='flex gap-2'>
          <div className=' bg-slate-700 bg-opacity-50 rounded-xl p-2 w-[40vw]'>
            <h2>Skills</h2>
            <ul className='text-sm flex flex-col p-2 gap-2'>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>React JS</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
              <li>Firebase</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
          <div className='relative w-[60vw]'>
            <img className='w-full h-full object-cover rounded-full' src="https://cdn.create.vista.com/api/media/small/139022268/stock-photo-businessman-showing-ok-gesture" alt="Akhil's Photo" />
            <span className=' absolute top-2 p-2 bg-blue-500 rounded-full right-2'>Hello</span>
            <span className=' absolute bottom-2 left-2 rounded-full bg-blue-500 p-2 '>World</span>
            <span></span>
          </div>
        </div>

        <div className='my-4'>
          <div className='w-[60vw] bg-slate-700 bg-opacity-20 p-2 rounded-2xl '>
            <h2 className='mb-3'>Projects</h2>
            <ul className='flex flex-col gap-2'>
              <li className='p-2 bg-slate-500 bg-opacity-20 rounded-2xl'>
                <p className='flex justify-between items-center'><span>Hermetica</span> <a href="" className='py-1 px-3 bg-blue-500 bg-opacity-40 rounded-xl'>SH</a></p>
                <p className=' text-xs my-1'>React JS, Tailwind CSS, Framer Motion</p>
              </li>
               <li className='p-2 bg-slate-500 bg-opacity-20 rounded-2xl'>
                <p className='flex justify-between items-center'><span>Netflix Clone</span> <a href="" className='py-1 px-3 bg-blue-500 bg-opacity-40 rounded-xl'>SH</a></p>
                <p className=' text-xs my-1'>React JS, Tailwind CSS, Firebase</p>
              </li>
               <li className='p-2 bg-slate-500 bg-opacity-20 rounded-2xl'>
                <p className='flex justify-between items-center'><span>Nike Clone</span> <a href="" className='py-1 px-3 bg-blue-500 bg-opacity-40 rounded-xl'>SH</a></p>
                <p className=' text-xs my-1'>React JS, Tailwind CSS</p>
              </li>
              <li className='p-2 bg-slate-500 bg-opacity-20 rounded-2xl'>
                <p className='flex justify-between items-center'><span>E-commerce</span> <a href="" className='py-1 px-3 bg-blue-500 bg-opacity-40 rounded-xl'>SH</a></p>
                <p className=' text-xs my-1'>React JS, Styled Component, Firebase</p>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <div>
                
              </div>
            </div>
          </div>
        </div>
      </div> 
    </main>
  )
}

export default Home
