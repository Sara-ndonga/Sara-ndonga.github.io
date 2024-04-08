"use client";

import React from "react";
import Header from "../components/Header/Header";
import AuthContext from "../components/AuthContext/AuthContext";

export default function CatalogPage() {
  return (
    <AuthContext>
      <main className="flex flex-col items-center justify-center min-h-screen bg-green-50">
        <Header />
      </main>
    </AuthContext>
  );
}
