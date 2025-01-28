import React from "react";

export const Modal = ({ item, closeModal }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg w-11/12 max-w-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
        <img src={item.image} alt={item.title} className="w-full h-64 object-cover mb-4" />
        <p className="text-gray-700 mb-4">{item.description}</p>
        <button
          onClick={closeModal}
          className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};