import React from 'react';
import Img from '../assets/profile.jpg';
import { useParams } from 'react-router-dom';

const Details = ({ data }) => {
  const { url } = useParams();
  const dataDetail = data.find(data => data.url === url);
  console.log(dataDetail);
  const { name, proposedBy, Abstract, image } = dataDetail;

  return (
    <div className='mb-12 mt-4'>
      <h3 className='text-violet text-4xl text-center mb-12'>{name}</h3>
      <div className='flex mx-4 flex-wrap gap-12 justify-center'>
        <div className='sm:w-[350px] w-full sm:h-[400px] h-[450px] rounded-3xl overflow-hidden '>
          <img src={Img} alt="" className=' w-full h-full object-cover' />
        </div>
        <div className='sm:max-w-[500px] w-full font-montserrat'>
          <p className='text-xl'>Proposed By: <a href='#' className=''>{proposedBy}</a> </p>
          <p className=' text-subMainText text-justify text-lg mt-4'>
          {Abstract}
          </p>
        </div>
      </div>
      <div className='my-16 p-16 justify-center items-center bg-iconbgHover flex flex-col gap-16'>
      <form className='flex flex-col w-[600px] gap-4 mx-6 text-iconBg'>
        <input className=' rounded-md py-2 px-4 outline-none' type="text" placeholder='Your Name' />
        <input className=' rounded-md py-2 px-4 outline-none' type="text" placeholder='Suggestions' />
        <button className=' bg-violet py-2 text-mainText text-xl rounded-md' type='submit'>SUBMIT</button>
      </form>
      <div>
        <div>
          <div>
            <h4>Akhil</h4>
            <p>12:05 PM</p>
          </div>
          <p>A really good project for environment</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Details
