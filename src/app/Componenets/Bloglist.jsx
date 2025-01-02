"use client"
import React, { useState } from 'react'
import { blog_data } from '../../../Assets/assets'
import Blogitems from './Blogitems'

const Bloglist = () => {

    const [menu, setMenu] = useState('All')
  
    
  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        <button onClick={()=>setMenu("All")} className={menu==="All"? "bg-black text-white py-1 px-4 rounded-sm":""}>All</button>
         <button onClick={()=>setMenu("Entrepreneurship")} className={menu==="Entrepreneurship"? "bg-black text-white py-1 px-4 rounded-sm":""}>Entrepreneurship</button>
         <button onClick={()=>setMenu("Wellness")} className={menu==="Wellness"? "bg-black text-white py-1 px-4 rounded-sm":""}>Wellness</button>
         <button onClick={()=>setMenu("Tech Trends")} className={menu==="Tech Trends"? "bg-black text-white py-1 px-4 rounded-sm":""}>Tech Trends</button>
         <button onClick={()=>setMenu("Travel")} className={menu==="Travel"? "bg-black text-white py-1 px-4 rounded-sm":""}>Travel</button>

      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {blog_data.filter((item)=> menu==="All"?true:item.category===menu).map((item,index) =>{
            return <Blogitems key={index} id={item.id} image={item.image} title={item.title} description={item.description} category={item.category}/>
        })}

      </div>
    </div>
  )
}

export default Bloglist;
