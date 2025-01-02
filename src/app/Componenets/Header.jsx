import Image from 'next/image'
import React from 'react'
import { assets } from '../../../Assets/assets'




const Header = () => {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center w-full">
  <Image
    src={assets.logo1}
    width={120}
    alt="Logo"
    className="w-[100px] sm:w-[120px]"
  />
  <div className="flex gap-4">

    <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black bg-black text-white">
      Sign in
    </button>

    <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black hover:shadow-[-7px_7px_0px_#000000]">
      Get Started
      <Image src={assets.arrow_icon}  alt='' width={25} height={25} />
    </button>
  </div>
</div>
<div className="text-center my-8">
  <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
  <p className="mt-6 max-w-[740px] mx-auto text-xs sm:text-base">
    Subscribe to learn about new product features, the latest in tecnology and updates.
  </p>
  <form
    className="flex justify-between items-center max-w-[500px] mx-auto mt-10 border border-black  rounded overflow-hidden"
    action=""
  >
    <input
      type="email"
      placeholder="Enter your email"
      required
      aria-label="Email address"
      className="flex-grow pl-4 py-3 outline-none text-sm sm:text-base"
    />
    <button
      type="submit"
      aria-label="Subscribe"
      className="border-l border-black bg-black text-white py-3 px-4 sm:px-8 active:bg-gray-600 hover:bg-gray-700 transition-colors duration-200"
    >
      Subscribe
    </button>
  </form>
</div>

    </div>
  )
}

export default Header
