import React from 'react';

function Pricing() {
  return (
    <section id="pricing" className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Nuestros Precios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Básico</h3>
            <p className="text-xl font-bold mb-4">$500</p>
            <p>Landing Page simple y rápida.</p>
          </div>
          <div className="p-6 bg-gray-100 shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Avanzado</h3>
            <p className="text-xl font-bold mb-4">$1000</p>
            <p>Web multipágina con optimización SEO básica.</p>
          </div>
          <div className="p-6 bg-gray-100 shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Premium</h3>
            <p className="text-xl font-bold mb-4">$2000</p>
            <p>E-commerce con gestión de inventarios y pagos.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
