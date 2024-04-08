"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-center w-screen h-20 px-6 md:px-24 absolute top-0 bg-green-100 z-20">
      <div className="flex items-center">
        <p
          className="font-bold xl:hidden absolute left-6 text-xl hover:cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </p>
        <Link
          href="/"
          className="flex text-4xl text-green-800 font-satisfy z-30 transition-transform transform-gpu hover:scale-105"
        >
          NAMASTÉ
        </Link>
      </div>
      <div
        className={`xl:flex absolute top-20 xl:top-8 left-0 p-2 xl:p-0 xl:justify-between w-fit xl:w-full xl:items-center xl:space-x-4 bg-green-100 z-20 ${
          menuOpen ? "flex flex-col items-start" : "hidden"
        }`}
      >
        <Link
          href="/catalogo"
          className="flex-grow xl:block ml-4 xl:ml-0 py-2 xl:py-0 hover:underline"
        >
          <p className="text-center font-bold">CATÁLOGO</p>
        </Link>
        <Link
          href="/propiedades"
          className="flex-grow xl:block ml-4 xl:ml-0 py-2 xl:py-0 hover:underline"
        >
          <p className="text-center font-bold">PROPIEDADES</p>
        </Link>
        <p className="flex-grow text-center" />
        <Link
          href="/ubicacion"
          className="flex-grow xl:block ml-4 xl:ml-0 py-2 xl:py-0 hover:underline"
        >
          <p className="text-center font-bold">UBICACIÓN</p>
        </Link>
        <Link
          href="/contacto"
          className="flex-grow xl:block ml-4 xl:ml-0 py-2 xl:py-0 hover:underline"
        >
          <p className="text-center font-bold">CONTACTOS</p>
        </Link>
      </div>
    </div>
  );
}
