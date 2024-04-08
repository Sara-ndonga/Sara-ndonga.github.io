"use client";

import React from "react";
import Header from "../components/Header/Header";
import ContactComponent from "./components/ContactComponent";
import AuthContext from "../components/AuthContext/AuthContext";

export default function ContactPage() {
  return (
    <AuthContext>
      <main className="flex flex-col items-center justify-center min-h-screen bg-green-50">
        <Header />
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-col w-full sm:w-fit mt-20 mb-12 sm:mb-0 sm:mr-12">
            <p className="font-bold text-center underline text-lg md:text-2xl p-2">
              Horario:
            </p>
            <p className="text-lg md:text-2xl text-center">
              Por las <span className="underline">mañanas</span>
            </p>
            <p className="text-lg md:text-2xl text-center">
              De lunes a viernes:
            </p>
            <p className="text-lg md:text-2xl text-center">de 10:00 a 14:00</p>
            <p className="text-lg md:text-2xl text-center">
              Por las <span className="underline">tardes</span>
            </p>
            <p className="text-lg md:text-2xl text-center">
              De martes a viernes:
            </p>
            <p className="text-lg md:text-2xl text-center">de 17:00 a 20:00</p>
          </div>
          <div className="flex flex-col justify-center align-middle w-full sm:w-fit sm:ml-12">
            <p className="text-lg md:text-2xl text-gray-500 text-center p-2">
              CONTACTOS
            </p>
            <ContactComponent type="Whatsapp" />
            <ContactComponent type={"Instagram"} />
            <ContactComponent type={"Facebook"} />
            <ContactComponent type="TikTok" />
          </div>
        </div>
      </main>
    </AuthContext>
  );
}
