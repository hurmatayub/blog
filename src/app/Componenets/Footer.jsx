import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="bg-gray-900 py-8 px-4 sm:px-12">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="flex flex-col items-center sm:items-start">
          <img src="/path-to-your-logo.png" alt="Blog Logo" width={150} />
          <p className="text-sm text-gray-400 mt-2">All rights reserved. Copyright @ Blog</p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-0">
          <a href="#about" className="text-white text-sm hover:text-indigo-400 transition duration-200">About</a>
          <a href="#contact" className="text-white text-sm hover:text-indigo-400 transition duration-200">Contact</a>
          <a href="#privacy" className="text-white text-sm hover:text-indigo-400 transition duration-200">Privacy Policy</a>
          <a href="#terms" className="text-white text-sm hover:text-indigo-400 transition duration-200">Terms of Service</a>
        </div>

        {/* Social Icons Section */}
        <div className="flex gap-6 mt-6 sm:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-blue-600 text-xl hover:text-blue-700 transition duration-300 transform hover:scale-110" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-blue-500 text-xl hover:text-blue-600 transition duration-300 transform hover:scale-110" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-blue-500 text-xl hover:text-blue-600 transition duration-300 transform hover:scale-110" />
          </a>
          <a href="mailto:someone@example.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="text-gray-800 text-xl hover:text-gray-700 transition duration-300 transform hover:scale-110" />
          </a>
        </div>
      </div>

      {/* Divider and Bottom Text */}
      <div className="mt-8 border-t border-gray-600 pt-4 text-center">
        <p className="text-sm text-gray-500">Powered by Your Blog Name</p>
      </div>
    </div>
  )
}

export default Footer
