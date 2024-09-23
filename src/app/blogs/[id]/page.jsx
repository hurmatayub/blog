'use client'
import React, { useState, useEffect } from 'react'
import { assets, blog_data } from '../../../../Assets/assets';
import Image from 'next/image';
import Blogitems from '@/app/Componenets/Blogitems';
import Footer from '@/app/Componenets/Footer';
import Link from 'next/link';

const page = ({params}) => {

    const [data, setData] = useState(null);

    const fetchBlogData = () => {
        for(let i=0;i<blog_data.length;i++)
        {
          if (Number(params.id)===blog_data[i].id) {
            setData(blog_data[i]);
            console.log(blog_data[i]);
            break;
            
          }
        }
    }

    useEffect(() =>{
        fetchBlogData();
    },[])

  return (data?<>
    <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
         <Link href="/">
        <Image src={assets.icon} width={70} alt="" className="w-[130px] sm:w-auto"/>
        </Link>
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">Get started <Image src={assets.arrow_icon} width={25} /></button>
      </div>
      <div className="text-center my-24">
        <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">{data.title}</h1>
        <Image className="mx-auto mt-6 border border-white rounded-full" src={data.author_img} width={60} height={60} alt="" />
        <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">{data.author}</p>
      </div>
    </div>
    <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
      <Image className="border-4 border-black" src={data.image} width={1280} height={720} alt="" />
      <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
      <p>{data.description}</p>
      <h3 className="my-5 text-[18px] font-semibold">step:1= qwertyuiop</h3>
      <p className="my-3">If you’ve ever read a blog post, you’ve consumed content from a thought leader that is an expert in their industry</p>
      <p className="my-3">If you’ve ever read a blog post, you’ve consumed content from a thought leader that is an expert in their industry</p>
      <h3 className="my-5 text-[18px] font-semibold">step:2= qwertyuiop</h3>
      <p className="my-3">If you’ve ever read a blog post, you’ve consumed content from a thought leader that is an expert in their industry</p>
      <p className="my-3">If you’ve ever read a blog post, you’ve consumed content from a thought leader that is an expert in their industry</p>
      <h3 className="my-5 text-[18px] font-semibold">step:3= qwertyuiop</h3>
      <p className="my-3">If you’ve ever read a blog post, you’ve consumed content from a thought leader that is an expert in their industry</p>
      <p className="my-3">If you’ve ever read a blog post, you’ve consumed content from a thought leader that is an expert in their industry</p>
      <h3 className="my-5 text-[18px] font-semibold">conclusion</h3>
      <p className="my-3">If you’ve ever read a blog post, you’ve consumed content from a thought leader that is an expert in their industry</p>
      <div className="my-24">
        <p className="text-black font font-semibold my-4">Share this artical on social media</p>
        <div className="flex">
          <Image src={assets.facebook_icon1} width={50} alt="" />
          <Image src={assets.x_icon} width={50} alt="" />
          <Image src={assets.googleplus_icon1} width={50} alt="" />
        </div>
      </div>
    </div>
    <Footer />
    </>:<></>
  )
}

export default page
