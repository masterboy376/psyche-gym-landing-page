import React from 'react'
import {BsFacebook, BsTwitter, BsInstagram} from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='w-full px-4 py-2 mx-auto container flex sm:flex-row sm:justify-between sm:items-center flex-col justify-center items-start'>
        <div className="flex sm:mx-0 mx-auto">
            <span className="text-sm sm:text-base cursor-pointer sm:mx-4 mx-1 hover:text-orange-500">Home</span>
            <span className="text-sm sm:text-base cursor-pointer sm:mx-4 mx-1 hover:text-orange-500">Programs</span>
            <span className="text-sm sm:text-base cursor-pointer sm:mx-4 mx-1 hover:text-orange-500">Memberships</span>
            <span className="text-sm sm:text-base cursor-pointer sm:mx-4 mx-1 hover:text-orange-500">Gallery</span>
            <span className="text-sm sm:text-base cursor-pointer sm:mx-4 mx-1 hover:text-orange-500">Trainers</span>
        </div>
        <div className="flex sm:mx-0 mx-auto sm:mt-0 mt-2">
            <span className="text-base cursor-pointer sm:mx-4 ml-2 hover:text-orange-500"><BsFacebook size={28}/></span>
            <span className="text-base cursor-pointer sm:mx-4 ml-2 hover:text-orange-500"><BsTwitter size={28}/></span>
            <span className="text-base cursor-pointer sm:mx-4 ml-2 hover:text-orange-500"><BsInstagram size={28}/></span>
        </div>
    </div>
  )
}

export default Footer