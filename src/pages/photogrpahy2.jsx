import React from "react";
import { photos } from "../data/photos";

const Photography2 = () => {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Photography</h1>

      {/* Responsive Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img 
              src={photo.src} 
              alt={photo.alt} 
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photography2;
