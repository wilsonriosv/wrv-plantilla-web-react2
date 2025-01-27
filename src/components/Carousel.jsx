import React, { useState, useEffect } from "react";

// Importa las imágenes desde la carpeta /src/assets
import image1 from "../assets/imagen1.jpg";
import image2 from "../assets/imagen2.jpg";
import image3 from "../assets/imagen3.jpg";

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: image1, alt: "Imagen 1" },
    { src: image2, alt: "Imagen 2" },
    { src: image3, alt: "Imagen 3" },
  ];

  const totalSlides = images.length;

  // Cambio automático de las imágenes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval); // Limpia el intervalo
  }, [totalSlides]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden pt-16"> {/* Agregado pt-16 para el padding superior */}
      {/* Contenedor para las imágenes */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {/* Imagen individual con ajuste de tamaño */}
            <img
              src={image.src}
              alt={image.alt}
              className="w-full object-cover h-[60vh] md:h-[70vh]" // Ajuste del alto para pantallas más grandes
            />
          </div>
        ))}
      </div>

      {/* Botones de control */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200"
      >
        ❯
      </button>

      {/* Indicadores (puntos) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};
