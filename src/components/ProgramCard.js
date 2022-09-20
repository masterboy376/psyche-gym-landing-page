import React from 'react'

const ProgramCard = ({imgUrl, title}) => {
  return (
    <div style={{"minWidth": "250px", "maxWidth": "250px"}} className={`rounded-lg border-2 border-orange-500 mx-4 p-2`}>
      <div className="w-full h-48 rounded-lg bg-orange-500"></div>
      <p className="text-center text-xl font-thin">{title}</p>
    </div>
  )
}

export default ProgramCard