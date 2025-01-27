import React from "react";

export const Card = ({ title, description, image, openModal }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Asegúrate de que el path de la imagen sea correcto */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">
          {description.length > 50 ? `${description.slice(0, 50)}...` : description}
        </p>
        <button
          onClick={() => openModal({ title, description, image })}
          className="text-blue-500 hover:underline"
        >
          Leer más
        </button>
      </div>
    </div>
  );
};

