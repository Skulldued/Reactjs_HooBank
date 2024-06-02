import React from 'react'
import { card } from '../assets'
const Better = () => {
  return (
    <div className='text-white w-full py-16 px-8'>
      <div className='max-w-[1180px] mx-auto'>
        <div className="grid md:grid-cols-2 ">
           <div className='flex items-center'>
              <div className='max-w-[70%]'>
                <h1 className='text-3xl md:text-4xl font-bold'>Find a better card deal in few easy steps</h1>
                <p className='text-slate-600 my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repellat magni atque nam vel tempora optio modi impedit laboriosam temporibus!</p>
                <button className='my-4'>Get Started</button>
              </div>
           </div>
           <div>
            <img src={card} alt="" />
           </div>
        </div>
      </div>
    </div>
  )
}

export default Better
