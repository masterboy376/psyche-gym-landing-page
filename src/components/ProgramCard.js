import React, { useState } from 'react';


const ProgramCard = ({imgUrl, title, body}) => {
  const [hover, setHover] = useState(false)
  return (
    <div onMouseOver={()=>{setHover(true)}} onMouseOut={()=>{setHover(false)}} style={{"minWidth": "350px", "maxWidth": "350px"}} className={`rounded-lg border-2 border-orange-500 mx-4 p-2`}>
      <div className={`w-full h-56 rounded-lg relative`}>
        <img alt='' src={imgUrl} className='w-full h-full rounded-lg absolute top-0 left-0' />
        <div className={`w-full h-full rounded-lg bg-black absolute bottom-0 left-0 p-2 ${hover?'opacity-70':'opacity-0'} transition-all duration-500`}>{body}</div>
      </div>
      <p className="text-center text-xl font-thin">{title}</p>
    </div>
  )
}

export default ProgramCard