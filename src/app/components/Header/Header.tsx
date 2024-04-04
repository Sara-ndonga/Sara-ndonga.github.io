import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-screen h-20 px-24 absolute top-0 bg-green-100 z-10">
      <p className="font-bold">CATÁLOGO</p>
      <p className="font-bold">PROPIEDADES</p>
      <h1 className="text-4xl text-center text-green-800 font-satisfy">NAMASTÉ</h1>
      <p className="font-bold">UBICACIÓN</p>
      <p className="font-bold">CONTACTOS</p>
    </header>
  );
}
