"use client";

import Link from "next/link";
import React from "react";
import Header from "../components/Header/Header";
import AuthContext from "../components/AuthContext/AuthContext";

export default function LocationPage() {
  return (
    <AuthContext>
      <main className="flex flex-col items-center justify-center min-h-screen bg-green-50">
        <Header />
        <div className="flex flex-col md:flex-row justify-center items-center w-full mt-4 md:mt-0">
          <div className="flex flex-col md:mr-12 max-w-72">
            <p className="text-lg md:text-2xl text-gray-500 text-center mb-4">
              UBICACIÓN
            </p>
            <p className="text-lg text-center">
              Nos encontramos en Alcorcón, a 14km de Madrid capital, en la Calle
              Luna número 3
            </p>
          </div>
          <div className="flex md:ml-12 max-w-96 mt-4 md:mt-0">
            <Link
              href="https://www.google.es/maps/place/Namaste/@40.3434217,-3.8272622,17z/data=!4m8!3m7!1s0xd418f61a11c258d:0x1d6c468bdc250720!8m2!3d40.3430661!4d-3.8255134!9m1!1b1!16s%2Fg%2F11hzm5dtys?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform-gpu hover:scale-110"
            >
              <picture>
                <img src="img/location.png" alt="Localización" />
              </picture>
            </Link>
          </div>
        </div>
        <div className="mt-12">
          <p className="text-2xl md:text-4xl font-bold text-center">
            Namaste, C. la Luna, 3, 28922
          </p>
          <p className="text-2xl md:text-4xl font-bold text-center">
            Alcorcón, Madrid
          </p>
        </div>
      </main>
    </AuthContext>
  );
}
