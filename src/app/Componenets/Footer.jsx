'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { assets } from '../../../Assets/assets';

const Footer = () => {
  return (
    <footer className="bg-[#0E1726] text-gray-400 py-10">
      <div className="container mx-auto px-5 md:px-12 lg:px-28 grid grid-cols-1 md:grid-cols-4 gap-8">
       
        <div>
          <Image src={assets.logo2} alt="Logo" width={100} height={40} />
          <p className="mt-4 text-sm leading-relaxed">
  Stay updated with our latest articles, tutorials, and insights on web development, 
  technology trends, and tips to enhance your skills. Explore the world of coding with us!
</p>

          <p className="mt-6 text-sm">© 2024 blogs. All Rights Reserved.</p>
        </div>

    
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Get Started
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Corporate
              </Link>
            </li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Others</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-white">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Something goes here
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Corporate
              </Link>
            </li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Follow us on Social Media
          </h3>
          <div className="flex space-x-4">
            <Link href="#">
              <Image src={assets.facebook} alt="Facebook" width={30} height={30} />
            </Link>
            <Link href="#">
              <Image src={assets.instagram} alt="Instagram" width={30} height={30} />
            </Link>
            <Link href="#">
              <Image src={assets.twitter} alt="Twitter" width={30} height={30} />
            </Link>
            <Link href="#">
              <Image src={assets.linkedIn} alt="LinkedIn" width={30} height={30} />
            </Link>
            <Link href="#">
              <Image src={assets.github} alt="Github" width={30} height={30} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
