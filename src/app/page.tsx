"use client";

import Link from "next/link";
import React, { useContext } from "react";
import Header from "./components/Header/Header";
import AuthContext from "./components/AuthContext/AuthContext";

export default function Home() {
  return (
    <AuthContext>
      <main className="flex flex-col items-center justify-center min-h-screen bg-green-50">
        <Header />
        <div className="w-full mt-[-30vh] z-10">
          <div className="bg-green-50 w-fit mx-auto z-10">
            <p className="text-center text-2xl text-green-600">
              TU TIENDA DE TÉ
            </p>
          </div>
          <Link
            href="/contacto"
            className="flex w-full justify-center absolute bottom-10"
          >
            <button className="border-2 rounded w-44 mx-auto bg-white p-3 z-10 hover:text-blue-500 hover:shadow">
              <p className="text-sm bold font-mono">CONTACTAR</p>
            </button>
          </Link>
        </div>
        <div className="flex justify-center absolute xl:top-0 w-screen bg-green-50 overflow-hidden z-0">
          <picture className="max-h-screen">
            <img src="img/logo.png" alt="Logo" className="w-[50vw]" />
          </picture>
        </div>
      </main>
    </AuthContext>
  );
}
