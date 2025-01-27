import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white text-center py-4">
      <p>© {new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados.</p>
    </footer>
  );
};
