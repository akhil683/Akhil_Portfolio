import React from 'react'

const FooterSocials = () => {

  return (
    <div>
      <div className='mt-2 mb-6'>
        <h2 className=' bg-iconbgHover px-4 py-2 rounded-full text-center mb-2'>Hermetica</h2>
        <p className='text-sm text-subMainText'>The heart of Tech</p>
      </div>
        <ul className='flex gap-2'>
          <li className='p-2 bg-iconBg rounded-full hover:bg-iconbgHover'>2</li>
          <li className='p-2 bg-iconBg rounded-full hover:bg-iconbgHover'>1</li>
          <li className='p-2 bg-iconBg rounded-full hover:bg-iconbgHover'>3</li>
          <li className='p-2 bg-iconBg rounded-full hover:bg-iconbgHover'>3</li>
        </ul>
    </div>
  )
}

export default FooterSocials
