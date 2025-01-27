import React, { useState } from "react";
import { Card } from "./Card";
import { Modal } from "./Modal";

export const Servicios = ({ services }) => {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
            openModal={openModal}
          />
        ))}
      </div>

      {/* Modal Condicional */}
      {selectedService && (
        <Modal item={selectedService} closeModal={closeModal} />
      )}
    </div>
  );
};
