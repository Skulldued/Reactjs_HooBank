import React from 'react'
import { FaFacebook,FaTwitter,FaLinkedin   } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
const Copyright = () => {
  return (
    <div className='w-full px-10 py-2 bg-gray-700 text-white'>
       <div className="max-w-[1180px] mx-auto grid md:grid-cols-2">
       <div>
       <p>2023 Company | All Rights Reserved</p>
       </div>
        <div className='flex my-6 lg:my-0 justify-center'>
            <FaFacebook className='mx-4'/>
            <FaTwitter className='mx-4'/>
            <FaLinkedin className='mx-4'/>
            <AiFillInstagram className='mx-4'/>
        </div>
       </div>
    </div>
  )
}

export default Copyright
