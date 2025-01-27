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
      <Navbar />
      <Carousel />
      <Section id="servicios" title="Servicios">
        {/* Aquí reemplazamos la sección por el componente Servicios */}
        <Servicios services={services} />
      </Section>
      <Section id="cursos" title="Cursos">
        {/* Aquí reemplazamos la sección por el componente Servicios */}
        <Cursos cursos={courses} />
      </Section>
      <Section id="nosotros" title="Nosotros">
        <p className="text-center text-gray-700">
          Somos una empresa comprometida con brindar los mejores servicios y cursos para nuestros clientes.
        </p>
      </Section>
      <Section id="blog" title="Blog">
        <p className="text-center text-gray-700">
          Aquí encontrarás artículos interesantes sobre nuestros servicios y cursos.
        </p>
      </Section>
      <Section id="galeria" title="Galería">
        <p className="text-center text-gray-700">
          Próximamente, una galería de nuestras actividades y logros.
        </p>
      </Section>
      <Section id="contacto" title="Contacto">
        <p className="text-center text-gray-700">
          Contáctanos en: contacto@tuempresa.com
        </p>
      </Section>
      <Footer />
    </div>
  );
};

export default App;
