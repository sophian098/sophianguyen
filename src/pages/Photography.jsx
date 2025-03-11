import React, { useState } from "react";
import { photos } from "../data/photos";

const Photography = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Function to open the full-screen modal
  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="min-h-screen p-8 pt-32">
      <h1 className="text-3xl font-bold text-center mb-6">Photography</h1>

      {/* Responsive Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div 
            key={index} 
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 group"
            onClick={() => openModal(photo.src)}
          >
            {/* Image */}
            <img 
              src={photo.src} 
              alt={photo.alt} 
              className="w-full h-64 object-cover transition-all duration-300 group-hover:brightness-75"
              loadings="lazy"
            />

            {/* Full Hover Overlay (Ensures "Click to View" appears instantly) */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300">
              <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100">
                Click to View
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Full-Screen Modal */}
      {selectedPhoto && (
        <div 
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80 z-50"
          onClick={closeModal} 
        >
          <img 
            src={selectedPhoto} 
            alt="Full-size"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Photography;