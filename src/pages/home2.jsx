import React from "react";
import Projects from "./Projects";  
import {ReactTyped} from "react-typed";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center">
      {/* Typing Animation for "Hi..." and constant "I'm" */}
      <h1 className="text-4xl sm:text-5xl  text-gray-600 mt-2">
        <ReactTyped 
          strings={["Hi", "Bonjour", "Hola", "你好", "こんにちは", "안녕하세요", "Hallo", "Ciao", "Привет", "مرحبا"]}
          typeSpeed={100} 
          backSpeed={50} 
          loop
        />{" "}
        I'm
      </h1>

      {/* Name */}
      <h2 className="text-6xl sm:text-6xl font-extrabold">
        SOPHIA NGUYEN
      </h2>

      {/* Subtitle */}
      <p className="text-2xl text-gray-600 mt-2">
        First Year Software Engineering Student at University of Waterloo
      </p>
    </div>
  );
};

const Logos = () =>{
    return (
        <div className="flex justify-center items-center space-x-6 p-8">
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
      );
 };

const Home = () => {
  return (
    <div>
        <Hero />
        <Logos />
        <Projects />
    </div>
  );
};

export default Home;