import React from 'react';

function Services() {
  return (
    <section id="services" className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Desarrollo de Páginas Web</h3>
            <p>Creación de sitios web profesionales adaptados a tus necesidades.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Optimización SEO</h3>
            <p>Mejoramos la visibilidad de tu sitio en los motores de búsqueda.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">E-commerce</h3>
            <p>Desarrollo de tiendas online completamente funcionales y seguras.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
