import Image from 'next/image'
import React from 'react'
import { assets } from '../../../Assets/assets'

const Footer = () => {
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-gray-400 py-5 items-center">
        <Image src={assets.icon} alt="" width={125}/>
        <p className=" text-sm text-white">All right reserved. Copyright @.blog</p>
        <div className="flex">
            <Image src={assets.facebook_icon1} alt="" width={40}/>
            <Image src={assets.x_icon} alt="" width={40}/>
            <Image src={assets.email_icon} alt="" width={40}/>
            <Image src={assets.googleplus_icon1} alt="" width={40}/>


        </div>
      
    </div>
  )
}

export default Footer
