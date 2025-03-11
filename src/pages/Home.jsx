import React from "react";
import Projects from "./Projects";  
import {ReactTyped} from "react-typed";
import Socials from "../components/Socials";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[60vh] text-center pt-40">
      {/* Typing Animation for "Hi..." and constant "I'm" */}
      <h1 className="text-4xl sm:text-5xl text-gray-600 leading-relaxed mb-3">
        <ReactTyped 
          strings={["Hi", "Bonjour", "Hola", "你好", "こんにちは", "안녕하세요", "Hallo", "Ciao", "Привет", "مرحبا"]}
          typeSpeed={100} 
          backSpeed={50} 
          loop
        />{" "}
        I'm
      </h1>

      {/* Name */}
      <h2 className="text-6xl sm:text-6xl font-extrabold leading-loose mb-5">
        SOPHIA NGUYEN
      </h2>

      {/* Subtitle */}
      <p className="text-2xl text-gray-600 leading-relaxed mb-2">
        First Year Software Engineering Student at University of Waterloo
      </p>
    </div>
  );
};

const Home = () => {
  return (
    <div>
        <Hero />
        <Socials className="-mt-8" />
        <Projects className="-mt-5"/>
    </div>
  );
};

export default Home;