import React from "react";

export const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white py-4 sticky top-0 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo y Título */}
        <div className="flex items-center space-x-4">
          <img src="/src/assets/logo-elmanantialsas3.jpg" alt="Logo1" className="h-8" /> {/* Cambia esto a tu logo */}
          <h1 className="text-2xl font-semibold">Mi Empresa</h1> {/* Título de la empresa */}
        </div>

        {/* Menú de navegación */}
        <ul className="flex space-x-6">
          {/* Opción Home añadida al principio */}
          <li>
            <a href="#home" className="hover:text-blue-300">
              Home
            </a>
          </li>
          {["Servicios", "Cursos", "Nosotros", "Blog", "Galería", "Contacto"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-blue-300">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
