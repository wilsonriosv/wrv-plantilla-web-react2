import React from "react";

export const Section = ({ id, title, children }) => {
  return (
    <section id={id} className="py-16 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  );
};
