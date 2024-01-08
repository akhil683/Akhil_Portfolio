import React from 'react';
import Profile from '../assets/profile.jpg';
import MemberCard from '../components/MemberCard';

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

  return (
    <div className='m-4'>
      <div>
        <div className='flex flex-wrap justify-center gap-4'>
          {Members.map((member) => {
            return (
              <MemberCard member={member} key={member.id} />
            )})}
        </div>
        
      </div>
    </div>
  )
}

export default Members
