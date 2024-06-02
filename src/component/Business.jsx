import React from 'react'
import { start,protect,send } from '../assets'
const Business = () => {
  return (
    <div className='w-full py-16'>
       <div className='max-w-[1180px] mx-auto px-5  lg:px-10 grid md:grid-cols-2'>
         <div className='text-white my-10 lg:w-[75%]'>
             <h1 className='text-4xl font-bold '>You do the business we'll handle the money. </h1>
             <p className='my-4 text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi harum quasi officiis atque reiciendis repellat delectus, modi praesentium volas libero necessitatibus cumque saepe non aut. Accusantium omnis reprehenderit repellat placeat!</p>
             <button>Get Started</button>
         </div>
         <div className='text-white my-10'>
            <div className='flex max-w-[500px] hover:bg-slate-700 duration-200 hover:rounded-xl hover:shadow-xl px-4 py-2'>
                <img src={start} alt="" />
              <div className='ml-10'>
                   <h1 className="font-bold">
                    Rewards
                   </h1>
                   <p className='text-slate-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elitdolor sit amet consectetur adipisicing elit. Delectus, modi?</p>
              </div>
            </div>
            <div className='flex max-w-[500px] my-4 hover:bg-slate-700 duration-200 hover:rounded-xl hover:shadow-xl px-4 py-2'>
                <img src={protect} alt="" />
              <div className='ml-10'>
                   <h1 className="font-bold">
                    100% Secured
                   </h1>
                   <p className='text-slate-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elitdolor sit amet consectetur adipisicing elit. Delectus, modi?</p>
              </div>
            </div>
            <div className='flex max-w-[500px] my-4 hover:bg-slate-700 duration-200 hover:rounded-xl hover:shadow-xl px-4 py-2'>
                <img src={send} alt="" />
              <div className='ml-10'>
                   <h1 className="font-bold">
                    Balance Transfer
                   </h1>
                   <p className='text-slate-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elitdolor sit amet consectetur adipisicing elit. Delectus, modi?</p>
              </div>
            </div>
         </div>
       </div>
    </div>
  )
}

export default Business
