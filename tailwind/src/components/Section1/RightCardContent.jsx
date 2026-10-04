import React from 'react'
import { MoveRight } from 'lucide-react'

const RightCardContent = () => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between">
        <h2 className="bg-white text-xl font-bold p-6 flex justify-center rounded-full h-12 w-12 items-center">
          1
        </h2>
        <div>
          <p className="text-xl leading-normal text-white mb-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            hic natus aperiam sit ratione, culpa nisi repellendus.
          </p>

          <div className="flex justify-between">
            <button className="bg-blue-600 text-white font-medium px-7 py-2 rounded-full text-lg">Satisfied</button>
            <button className="bg-blue-600 text-white font-medium px-4 py-2 rounded-full text-lg">
              <MoveRight />
            </button>
          </div>
        </div>
      </div>

  )
}

export default RightCardContent
