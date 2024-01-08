import React from 'react'

const MemberCard = ({ member }) => {
  const {name, imageURL, position} = member;

  return (
    <div className='flex flex-col max-sm:full'>
              <div className='relative'>
                <div className='absolute left-2 bottom-0 text-iconBg font-semibold'>
                  <span className='px-4 py-2 rounded-full bg-subMainText hover:bg-violet hover:text-mainText duration-200'>{name}</span>
                  <p className='px-4 py-2 mt-4 rounded-full bg-subMainText hover:bg-violet hover:text-mainText duration-200'>{position}</p>
                </div>
                <div className='sm:w-64 w-full sm:h-72 bg-violet rounded-lg overflow-hidden'>
                  <img className='w-full sm:h-full object-cover' src={imageURL} alt="" />
                </div>
              </div>
              <div className='w-56 mt-6 font-semibold max-sm:hidden'>
                <div className='flex gap-4 text-center'>
                  <div className='w-10 bg-iconBg border-2 border-subMainText rounded-xl'></div>
                  <p className='py-2 px-6 rounded-full bg-subMainText text-mainBg'>{name}</p>
                </div>
                <div className='pt-2 backdrop-blur-md mt-4 bg-iconbgHover rounded-md'>
                    <div className='p-2 bg-iconBg rounded'>
                      <span>{position}</span>
                      <p className=' font-normal text-sm leading-tight text-subMainText text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut accusamus temporibus ratione minus? Natus sit id earum inventore commodi, repellat aliquam dicta pariatur omnis ex aut labore nesciunt consetur ut?</p>
                    </div>
                </div>
              </div>
              </div>
  )
}

export default MemberCard
