// src/components/Header.jsx
export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">Mi Página</h1>
        <ul className="flex space-x-4">
          <li><a href="#tarjetas" className="hover:text-gray-300">Tarjetas</a></li>
          <li><a href="#carrusel" className="hover:text-gray-300">Carrusel</a></li>
          <li><a href="#footer" className="hover:text-gray-300">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}
