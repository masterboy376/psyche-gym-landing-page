import React from 'react'
import {BsCheckLg} from 'react-icons/bs';
import {CgClose} from 'react-icons/cg';

const MembershipCard = ({title, details, center, price}) => {
  return (
    <div style={{"minWidth": "350px", "maxWidth": "350px"}} className={`cursor-pointer hover:shadow-lg hover:shadow-orange-500 rounded-sm border-2 border-orange-500 h-auto sm:mx-0 mx-4 p-2 flex flex-col items-center`}>
      <p className="text-center text-4xl font-semibold">{title}</p>
      <p className="text-center text-2xl my-6 font-semibold">{price}.00 ₹ / Month</p>
      <ul>
        {
          details.map((item, index)=>{
            return <li key={index} className='flex my-2'>{item[1]? <BsCheckLg className={`text-green-500 mr-2`} size={16}/> : <CgClose className={`text-red-500 mr-2`} size={20}/>} <span>{item[0]}</span></li>
          })
        }
      </ul>
      <a className={`transition-all duration-300 border-2 my-6 mx-auto border-orange-500 text-orange-500 p-4 rounded-sm hover:bg-orange-500 hover:text-zinc-900 font-semibold`}>Inquire Now</a>
    </div>
  )
}

export default MembershipCard