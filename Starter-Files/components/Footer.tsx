import React from 'react';

const Footer = () => {
    return (
      <footer className="w-full py-8 bg-gray-900 text-white flex flex-col items-center justify-center">
        <div className="flex space-x-6 mb-4">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#pricing" className="hover:underline">
            Pricing
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;