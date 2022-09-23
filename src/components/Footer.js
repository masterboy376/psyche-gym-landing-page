import React from 'react'
import {BsFacebook, BsTwitter, BsInstagram} from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='w-full px-4 py-2 mx-auto container flex sm:flex-row sm:justify-between sm:items-center flex-col justify-center items-start'>
        <div className="grid sm:grid-rows-1 grid-rows-2 grid-flow-col gap-4 sm:mx-0 mx-auto">
            <a href={'#home'} className="text-center transition-all duration-500 text-sm sm:text-base cursor-pointer sm:mx-4 mx-1 hover:text-orange-500">Home</a>
            <a href={'#programs'} className="text-center transition-all duration-500 text-sm sm:text-base cursor-pointer sm:mx-4 mx-1 hover:text-orange-500">Programs</a>
            <a href={'#memberships'} className="text-center transition-all duration-500 text-sm sm:text-base cursor-pointer sm:mx-4 mx-1 hover:text-orange-500">Memberships</a>
            <a href={'#gallery'} className="text-center transition-all duration-500 text-sm sm:text-base cursor-pointer sm:mx-4 mx-1 hover:text-orange-500">Gallery</a>
            <a href={'#trainers'} className="text-center transition-all duration-500 text-sm sm:text-base cursor-pointer sm:mx-4 mx-1 hover:text-orange-500">Trainers</a>
            <a href={'#contact'} className="text-center transition-all duration-500 text-sm sm:text-base cursor-pointer sm:mx-4 mx-1 hover:text-orange-500">Contact</a>
        </div>
        <div className="flex sm:mx-0 mx-auto sm:mt-0 mt-2">
            <a href={'facebook.com'} className="transition-all duration-500 text-base cursor-pointer sm:mx-4 ml-2 hover:text-orange-500"><BsFacebook size={28}/></a>
            <a href={'twitter.com'} className="transition-all duration-500 text-base cursor-pointer sm:mx-4 ml-2 hover:text-orange-500"><BsTwitter size={28}/></a>
            <a href={'instagram.com'} className="transition-all duration-500 text-base cursor-pointer sm:mx-4 ml-2 hover:text-orange-500"><BsInstagram size={28}/></a>
        </div>
    </div>
  )
}

export default Footer