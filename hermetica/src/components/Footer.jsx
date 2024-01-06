import React from 'react'
import FooterSocials from './FooterSocials'

const Footer = () => {
  return (
    <footer className='p-6 bg-mainBg'>
      <div className='flex flex-wrap-reverse justify-between'>
        <FooterSocials />
        <div>
          <h4 className='my-2'>Projects</h4>
          <ul className='text-sm text-iconbgHover'>
            <li>Something</li>
            <li>something Else</li>
            <li>another project</li>
            <li>One more project</li>
            <li>Extra Project</li>
          </ul>
        </div>
        <div>
          <h4 className='my-2'>Events</h4>
          <ul className='text-sm text-iconbgHover'>
            <li>Something</li>
            <li>something Else</li>
            <li>another project</li>
            <li>One more project</li>
            <li>Extra Project</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
