import Link from "next/link";
import React from "react";
import { ContactComponentProps } from "./ContactComponent.props";

interface LinksType {
  Whatsapp: string;
  Instagram: string;
  Facebook: string;
  TikTok: string;
}

export default function ContactComponent({ type }: ContactComponentProps) {
  const links: LinksType = {
    Whatsapp: "https://wa.me/34636211242",
    Instagram: "https://www.instagram.com/namas_telua/",
    Facebook: "https://www.facebook.com/namastealcorcon/",
    TikTok: "https://www.tiktok.com/@namaste843/",
  };

  return (
    <Link
      href={links[type]}
      target="_blank"
      rel="noopener noreferrer"
      className="my-2 transition-transform transform-gpu hover:scale-110"
    >
      <picture className="flex justify-center">
        <img
          src={`img/${type.toLowerCase()}-icon.png`}
          alt={`${type.toLowerCase()}-icon`}
          className="w-12"
        />
      </picture>
      <p className="text-center text-xs sm:text-base">
        {type === "Whatsapp" ? "+34 636 21 12 42" : links[type]}
      </p>
    </Link>
  );
}
