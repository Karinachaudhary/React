import React from 'react'
import RightCard from './RightCard'

const RightContent = () => {
  return (
    <div className=' flex flex-nowrap rounded-4xl overflow-x-auto gap-10 h-full w-2/3 p-6'>
      <RightCard />
      <RightCard />
      <RightCard />
      
    </div>
  )
}

export default RightContent
