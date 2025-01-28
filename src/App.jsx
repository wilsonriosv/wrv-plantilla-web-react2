import React from "react";
import { Navbar } from "./components/Navbar";
import { Carousel } from "./components/Carousel";
import { Section } from "./components/Section";
import { Footer } from "./components/Footer";
import { Servicios } from "./components/Servicios"; // Importamos el nuevo componente Servicios
import { Cursos } from "./components/Cursos"; // Importamos el nuevo componente Servicios

const App = () => {
  const services = [
    { title: "Servicio 1", description: "Descripción del servicio 1", image: "/src/assets/service1.jpg" },
    { title: "Servicio 2", description: "Descripción del servicio 2", image: "/src/assets/service2.jpg" },
    { title: "Servicio 3", description: "Descripción del servicio 3", image: "/src/assets/service3.jpg" },
  ];

  const courses = [
    { title: "Curso 1", description: "Descripción del curso 1", image: "/src/assets/curso1.jpg" },
    { title: "Curso 2", description: "Descripción del curso 2", image: "/src/assets/curso2.jpg" },
    { title: "Curso 3", description: "Descripción del curso 3", image: "/src/assets/curso3.jpg" },
  ];

  return (
    <div>
      <div id="home"> 
        {/* Sección Home vacía, unicamente se usa para regresar desde cualquier parte 
            de la página cuando el usuario presione la opción Home del menu*/}
      </div>

      {/* Barra de navegación */}
      <Navbar />

      {/* div de VIDEO y CARRUSEL */}
      <div className="flex flex-col items-center md:flex-row p-4 gap-4 h-auto">
        {/* Video a la izquierda */}
        <div className="w-full md:w-1/4 h-full">
          <video
            src="/src/assets/disciplina.mp4"
            autoPlay
            controls
            loop
            muted
            className="h-auto max-h-[500px] w-full object-contain rounded-lg" //-Funciona bien en pantalla grande
          />
        </div>
        {/* Carrusel a la derecha */}
        <div className="w-full md:w-2/3 h-full object-cover rounded-lg shadow-lg">
          <Carousel />
          <div>
            </div><p className="text-center text-3xl font-bold text-gray-700 mt-2.5">Estos son nuestros cursos. ¡¡¡ANÍMATE!!!</p>
        </div>
      </div> {/* Fin del div de VIDEO y CARRUSEL */}

      {/* Sección de SERVICIOS */}
      <Section id="servicios" title="Servicios" className="py-0 my-0">
        {/* Aquí reemplazamos la sección por el componente Servicios */}
        <Servicios services={services} />
      </Section>

      {/* Sección de CURSOS */}
      <Section id="cursos" title="Cursos">
        {/* Aquí reemplazamos la sección por el componente Servicios */}
        <Cursos cursos={courses} />
      </Section>

      {/* Sección de NOSOTROS */}
      <Section id="nosotros" title="Nosotros">
        <p className="text-center text-gray-700">
          Somos una empresa comprometida con brindar los mejores servicios y cursos para nuestros clientes.
        </p>
      </Section>

      {/* Sección de BLOG */}
      <Section id="blog" title="Blog">
        <p className="text-center text-gray-700">
          Aquí encontrarás artículos interesantes sobre nuestros servicios y cursos.
        </p>
      </Section>

      {/* Sección de GALERÍA */}
      <Section id="galeria" title="Galería">
        <p className="text-center text-gray-700">
          Próximamente, una galería de nuestras actividades y logros.
        </p>
      </Section>
      
      {/* Sección de CONTACTO */}
      <Section id="contacto" title="Contacto">
        <p className="text-center text-gray-700">
          Contáctanos en: contacto@tuempresa.com
        </p>
      </Section>

      {/* Sección de FOOTER */}
      <Footer />
    </div>
  );
};

export default App;