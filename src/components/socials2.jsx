import React from "react";

const Socials2 = () => {
    return(
        <div>
            <div className="flex justify-center items-center space-x-6 ">
          {/* GitHub Logo (Links to GitHub) */}
          <a href="https://github.com/sophian098" target="_blank" rel="noopener noreferrer">
            <img src="/icons/github_black.png" alt="GitHub" className="h-16 w-auto hover:scale-110 transition-transform duration-300" />
          </a>
    
          {/* LinkedIn Logo (Links to LinkedIn) */}
          <a href="https://linkedin.com/in/sophianguyen01" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin_black.png" alt="LinkedIn" className="h-16 w-auto hover:scale-110 transition-transform duration-300" />
          </a>
    
          {/* Email Logo (Opens Email Client) */}
          <a href="mailto:s68nguye@uwaterloo.ca">
            <img src="/icons/email_black.png" alt="Email" className="h-16 w-auto hover:scale-110 transition-transform duration-300" />
          </a>
        </div>
    </div>
    );
};

export default Socials2;