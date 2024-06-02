import React from 'react'

const Customer = () => {
  return (
    <div className='w-full py-20 '>
       <div className=''>
        <div className='grid grid-cols-1 md:grid-cols-3 px-10 max-w-[1180px] mx-auto'>
            <div className='px-2 my-5 '>
               <div className='flex flex-col text-white xl:border-r-2 border-gray-500 items-center'>
                <h2 className='font-bold text-2xl'>3,800+</h2>
                <p className='text-[#13E0EE] font-bold'>User Active</p>
               </div>
            </div>
            <div className='px-2 my-5'>
               <div className='flex flex-col text-white xl:border-r-2 border-gray-500 items-center'>
                <h2 className='font-bold text-2xl'>230+</h2>
                <p className='text-[#13E0EE] font-bold'>Trusted Company</p>
               </div>
            </div>
            <div className='px-2 my-5'>
               <div className='flex flex-col text-white xl:border-r-2 border-gray-500 items-center'>
                <h2 className='font-bold text-2xl'>$230M+</h2>
                <p className='text-[#13E0EE] font-bold'>Total Transactions</p>
               </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Customer
