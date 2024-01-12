import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// commit error add
import Profile from '../assets/profile.jpg';
import MemberCard from '../components/MemberCard';
import Searchbar from '../components/Searchbar';

import { IoFilter } from "react-icons/io5";

const Members = ({ Members }) => {
  
  const [filterMenu, setFilterMenu ] = useState(false);
  const [searchField, setSearchField] = useState("");
  const [searchFilterData, setSearchFilterData] = useState([]);

  useEffect(() => {
    const SearchFilterData = Members.filter((data) => {
      return data.name.toLowerCase().includes(searchField);
    })
    setSearchFilterData(SearchFilterData);
  }, [searchField ]);

  const onSearchChange = (e) => {
    const searchFieldValue = e.target.value.toLowerCase();
    setSearchField(searchFieldValue);
  }

  return (
    <div className='mt-4 mb-12'>

      <div className='flex justify-center items-center sm:gap-4 gap-2'>
        <Searchbar 
          onSearchChange={onSearchChange} 
          Placeholder="Members"
        />
        <div className='text-center'>
          <div className='relative'>


            <span onClick={() => setFilterMenu(!filterMenu)} className='sm:px-4 px-2 py-2 bg-iconbgHover rounded-full text-subMainText cursor-pointer'>
              <IoFilter className='inline-block text-violet text-xl mr-2' />Filter
              </span>
              <div className={`absolute top-12 right-0 bg-iconbgHover w-[150px] rounded-2xl z-30 ${filterMenu ? "" : "hidden"}`}>
                  <ul>
                    <li className='p-2 cursor-pointer'>Final Year</li>
                    <li className='p-2 cursor-pointer'>Third Year</li>
                    <li className='p-2 cursor-pointer'>Second Year</li>
                    <li className='p-2 cursor-pointer'>First Year</li>
                  </ul>
              </div>

          </div>
        </div>

      </div>

        <div className='flex flex-wrap justify-center mt-6 gap-8 mx-6'>
          {searchFilterData.map((member) => {
            return (
              <MemberCard member={member} key={member.id} />
            )})}
        </div>
      </div>
  )
}

export default Members
