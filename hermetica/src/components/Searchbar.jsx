import React from 'react';
import { IoMdSearch } from 'react-icons/io';

const Searchbar = ({ onSearchChange, Placeholder }) => {


  return (
    <div>
      <div className='text-center relative w-[280px] flex center m-auto group duration-200 hover:scale-110'>
      <IoMdSearch 
        style={{marginLeft: "1rem", marginTop: "0.5rem", position: "absolute"}}
        className=' text-violet text-2xl' 
        />
      <input 
        id='search'
        type="text"  
        onChange={(e) => onSearchChange(e)}
        className=' py-2 px-12 rounded-full w-full sm:w-[350px] bg-iconbgHover outline-none border-iconbgHover border focus:border-subMainText'
        placeholder={`Search ${Placeholder}`}
        />
        </div>
      </div>
  )
}

export default Searchbar
