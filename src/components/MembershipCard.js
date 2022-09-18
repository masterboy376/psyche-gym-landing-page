import React from 'react'

const MembershipCard = ({imgUrl, title}) => {
  return (
    <div style={{"min-width": "300px"}} className={`rounded-sm border-2 border-orange-500 sm:mx-0 mx-4 p-2`}>
      <div className="w-full h-48 bg-orange-500"></div>
      <p className="text-center text-xl font-thin">{title}</p>
    </div>
  )
}

export default MembershipCard