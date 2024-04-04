"use client";

import React from "react";
import Header from "./components/Header/Header";

export default function Home() {
  const handleClick = (): void => {
    console.log("Click");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-green-50">
      <Header />
      <div className="w-full">
        <p className="text-center text-2xl text-green-600">TU TIENDA DE TÉ</p>
        <div className="flex w-full justify-center mt-96">
          <button
            className="border-2 rounded w-44 mx-auto bg-white p-3 z-10 hover:text-blue-500 hover:shadow"
            onClick={handleClick}
          >
            <p className="text-sm bold font-mono">CONTACTAR</p>
          </button>
        </div>
        <div className="flex justify-center absolute top-0 w-screen overflow-hidden z-0 max-h-screen">
          <picture className="max-h-screen">
            <img src="/img/logo.png" alt="Logo" className="w-[50vw]" />
          </picture>
        </div>
      </div>
    </main>
  );
}
