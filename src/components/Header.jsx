import React from 'react';

function Header() {
  return (
    <header className="bg-blue-500 text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Ecucommerce</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#services" className="hover:underline">Servicios</a></li>
            <li><a href="#pricing" className="hover:underline">Precios</a></li>
            <li><a href="#contact" className="hover:underline">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
