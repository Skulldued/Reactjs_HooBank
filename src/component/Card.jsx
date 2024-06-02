import React from 'react'
import {cardValue} from "../constant/index";
const Card = () => {
  return (
    <div className='w-full py-16'>
      <div className="max-w-[1180px] mx-auto px-8 lg:px-0">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-14 lg:gap-8">
        {
            cardValue.map((items,index)=>(
                <div className='flex flex-col hover:bg-slate-600 hover:rounded-xl hover:shadow-xl p-6 ' key={index}>
                    <img src={items.img} className='w-[30px]' alt="" />
                    <p className='text-slate-500 my-2'>{items.desc}</p>
                    <div className='flex items-center my-4'>
                        <div>
                            <img src={items.test} className='w-[75px]' alt="" />
                        </div>
                        <div className='ml-5'>
                            <p className='text-white font-bold'>{items.name}</p>
                            <p className='text-slate-500'>{items.job}</p>
                        </div>
                    </div>
                </div>
            ))
        }
      </div>
      </div>
    </div>
  )
}

export default Card
