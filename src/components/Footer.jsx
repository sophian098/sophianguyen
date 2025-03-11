import React from "react";
import Socials from "./Socials"; 

const Footer = () => {
  return (
    <footer className="bg-white text-black py-6 mt-10 w-full">
      <div className=" mx-auto text-center flex flex-col items-center space-y-4 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-3 bg-white">
        <p className="text-lg">
          Made with <span className="mx-1">❤️</span>, 
          <span className="mx-1">☕</span>, 
          and <span className="mx-1"> 🦢</span>.
        </p>

        {/* Copyright */}
        <p className="text-sm text-gray-400">© 2025 Sophia Nguyen. All rights reserved.</p>

        {/* Social Icons */}
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;
