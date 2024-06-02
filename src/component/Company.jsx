import React from 'react'
import { dropbox,airnub,coinbase,binance } from '../assets'
const Company = () => {
  return (
    <div className='text-white w-full py-16 px-14 lg:px-0'>
      <div className="max-w-[1180px] mx-auto">
        <div className='lg:flex lg:justify-between'>
            <div>
                <img src={dropbox} className='h-[40px] w-[150px] my-6 lg:my-0' alt="" />
            </div>
            <div>
                <img src={airnub} className='h-[40px] w-[150px] my-6 lg:my-0' alt="" />
            </div>
            <div>
                <img src={coinbase} className='h-[40px] w-[150px] my-6 lg:my-0' alt="" />
            </div>
            <div>
                <img src={binance} className='h-[40px] w-[150px] my-6 lg:my-0' alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Company
