import React, { useState } from "react";
import { Card } from "./Card";
import { Modal } from "./Modal";

export const Cursos = ({ cursos }) => {
  const [selectedCurso, setSelectedCurso] = useState(null);

  const openModal = (curso) => {
    setSelectedCurso(curso);
  };

  const closeModal = () => {
    setSelectedCurso(null);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cursos.map((curso, index) => (
          <Card
            key={index}
            title={curso.title}
            description={curso.description}
            image={curso.image}
            openModal={openModal}
          />
        ))}
      </div>

      {/* Modal Condicional */}
      {selectedCurso && (
        <Modal item={selectedCurso} closeModal={closeModal} />
      )}
    </div>
  );
};
