import React from "react";
import { experiences } from "../data/experiences";
import { featured } from "../data/featured";
import Card from "../components/Card";

const Experiences = () => {
  return (
    <div className="min-h-screen p-8 pt-32">
      <h1 className="text-3xl font-bold text-center mb-6">Experiences</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((experiences, index) => (
          <Card key={index} {...experiences} />
        ))}
      </div>
    </div>
  );
};

const Featured = () => {
    return (
      <div className="min-h-screen p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Featured</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((featured, index) => (
            <Card key={index} {...featured} />
        ))}
        </div>
      </div>
    );
};

const Highlights = () => {
    return(
        <div>
            <Experiences />
            <Featured />
        </div>
    );
}


export default Highlights;
