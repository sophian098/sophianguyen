import React from "react";

const Card = ({ title, image, subtitle, techStack, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md transition-transform transform hover:scale-105 hover:bg-gray-800 hover:text-white duration-300">
      <a
          href={link}
          target="_blank"
          rel="noopener noreferrer">
      {/* Image */}
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />

      {/* Title */}
      <h2 className="text-xl font-semibold">{title}</h2>

      {/* Subtitle */}
      <p className="text-gray-600 group-hover:text-white mb-2">{subtitle}</p>

      {/* Tech Stack (Only for Projects) */}
      {techStack && <p className="text-sm text-gray-500 italic">Tech Stack: {techStack}</p>}
      </a>
    </div>
  );
};

export default Card;
