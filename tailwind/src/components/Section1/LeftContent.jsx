import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3'>
        <div className='p-3' >
            <h3 className='mb-5 text-3xl font-bold'>Prospective<br/><span>Customer</span><br/><span>Segmentation</span></h3>
            <p className='text-sm flex flex-col'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat dignissimos sint est possimus deleniti exercitationem vitae doloribus voluptatum quisquam asperiores itaque nihil sit placeat, doloremque nesciunt ad repellat, molestiae tempore?</p>
        </div>
        <div className='text-8xl'>
            <ArrowUpRight />
        </div>
    </div>
  )
}

export default LeftContent
