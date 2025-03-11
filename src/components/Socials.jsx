import github_black from "../assets/icons/github_black.png";
import github_white from "../assets/icons/github_white.png";
import linkedin_black from "../assets/icons/linkedin_black.png";
import linkedin_white from "../assets/icons/linkedin_white.png";
import email_black from "../assets/icons/email_black.png";
import email_white from "../assets/icons/email_white.png";


import React from "react";

const Socials = () => {
  return (
    <div className="flex justify-center items-center space-x-6">
      {/* GitHub Logo */}
      <a href="https://github.com/sophian098" target="_blank" rel="noopener noreferrer">
        <div className="h-16 w-16 flex justify-center items-center">
          <img src={github_black} alt="GitHub" className="h-full w-full object-contain hover:scale-110 transition-transform duration-300" />
        </div>
      </a>

      {/* LinkedIn Logo */}
      <a href="https://linkedin.com/in/sophianguyen01" target="_blank" rel="noopener noreferrer">
        <div className="h-16 w-16 flex justify-center items-center">
          <img src={linkedin_black} alt="LinkedIn" className="h-full w-full object-contain hover:scale-110 transition-transform duration-300" />
        </div>
      </a>

      {/* Email Logo */}
      <a href="mailto:s68nguye@uwaterloo.ca">
        <div className="h-16 w-16 flex justify-center items-center">
          <img src={email_black} alt="Email" className="h-full w-full object-contain hover:scale-110 transition-transform duration-300" />
        </div>
      </a>
    </div>
  );
};

export default Socials;
