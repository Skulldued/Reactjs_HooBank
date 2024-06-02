import React from 'react'

const Service = () => {
  return (
    <div className='w-full py-10 text-white'>
      <div className="max-w-[1180px] mx-auto px-10">
        <div className='bg-gray-800 p-8  rounded-lg hover:bg-transparent duration-300 grid md:grid-cols-2'>
           <div className=''>
            <h1 className='text-white text-3xl font-bold my-2'>Let's try our services now!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, incidunt. Sapiente blanditiis quisquam deserunt eligendi asperiores hic, amet qui rem!</p>
           </div>
           <div className='flex md:justify-end items-center my-4 md:my-0'>
            <div>
            <button>Get Started</button>
            </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Service
