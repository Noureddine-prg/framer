import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4">
      <div className="text-xl font-bold">My Site</div>
      <div className="space-x-4">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#pricing" className="hover:underline">Pricing</a>
        <a href="#about" className="hover:underline">About</a>
      </div>
    </nav>
  );
};

export default Navbar;