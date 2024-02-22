import { MdOutlineEmail, MdOutlinePhoneEnabled } from "react-icons/md";
import { FaPhone } from 'react-icons/fa'
import { LiaBirthdayCakeSolid } from 'react-icons/lia'
import { IoLocationOutline } from 'react-icons/io5'
import { ReactNode } from "react";

const Profile = () => {

interface InfoTypes {
  id: number,
  title: string,
  value: string, 
  icon: ReactNode
}

  const Info: InfoTypes[]= [
    {
      id: 1,
      title: "Email",
      value: "akhilpalsra@gmail.com",
      icon: <MdOutlineEmail className="w-full h-full text-orange-500" />, 
    },
    {
      id: 2,
      title: "Phone",
      value: "+91 8219649129",
      icon: <MdOutlinePhoneEnabled className="w-full h-full text-orange-500" />, 
    },
    {
      id: 3,
      title: "Birthday",
      value: "21 Jan, 2004",
      icon: <LiaBirthdayCakeSolid className="w-full h-full text-orange-500" />,
    },
    {
      id: 4,
      title: "Location",
      value: "Himachal, India",
      icon: <IoLocationOutline className="w-full h-full text-orange-500"/>,
    }
  ]

const Image: string = "https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg";

  return (
    <header className="relative bg-gray-900 p-8 md:basis-[300px] w-full flex flex-col sm:flex-row sm:justify-evenly lg:flex-col gap-12 rouknded-xl">

      <div className="flex flex-col justify-center items-center text-center">
         <div className=' w-36 h-36 rounded-xl overflow-hidden'>
            <img src={Image} alt="" className="w-full h-full object-cover"/> 
         </div>    
         <div className="mt-4">
            <h1 className=" text-xl">Akhil Palsra</h1>
            <p className="text-xs mt-2 px-4 py-1 bg-orange-700 rounded-full text-gray-200">Frontend Developer</p>
         </div>
      </div> 

      <div className="flex flex-col gap-3">
        {Info.map((info) => {
          return (
            <div className="flex gap-2">
              <div className="w-12 h-12 border border-gray-700 p-3 rounded-xl">
                {info.icon}
              </div>
              <div>
                <p className="uppercase text-[10px] text-gray-300">{info.title}</p>
                <p className="text-sm">{info.value}</p>
              </div>
            </div> 
          )
        })}
      </div>
    </header>
  )
}

export default Profile

