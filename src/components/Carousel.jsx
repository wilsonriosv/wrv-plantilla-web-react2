import React, { useState, useEffect } from "react";

// Importa las imágenes desde la carpeta /src/assets
import image1 from "../assets/imagen1.jpg";
import image2 from "../assets/imagen2.jpg";
import image3 from "../assets/imagen3.jpg";
import image4 from "../assets/imagen4.jpg";
import image5 from "../assets/imagen5.jpg";

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: image1, alt: "Imagen 1" },
    { src: image2, alt: "Imagen 2" },
    { src: image3, alt: "Imagen 3" },
    { src: image4, alt: "Imagen 4" },
    { src: image5, alt: "Imagen 5" },
  ];

  const totalSlides = images.length;

  // Cambio automático de las imágenes
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval); // Limpia el intervalo
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Contenedor para las imágenes */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (100 / (window.innerWidth < 640 ? 1 : 3))}%)`, // Cambia según el tamaño de pantalla
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 p-2 box-border h-full" // Responsividad -Funciona bien en pantalla grande
          >
            <img
              src={image.src}
              alt={image.alt}
               className="w-full h-full object-cover rounded-lg shadow-lg" // Funciona bien en pantalla grande
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
    </div>
  );
};