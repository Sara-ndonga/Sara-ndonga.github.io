import React from "react";
import Header from "../../components/Header/Header";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import taza1 from "./../../assets/tazas/taza1.jpg";
import taza2 from "./../../assets/tazas/taza2.jfif";
import taza3 from "./../../assets/tazas/taza3.jpg";
import taza4 from "./../../assets/tazas/taza4.jpg";
import PhotoCardObj from "../../components/PhotoCard/PhotoCardObj";
import "./Gallery.scss";

function Gallery() {
  const photos = [
    new PhotoCardObj("Taza con tu nombre", taza1),
    new PhotoCardObj("Taza con foto", taza2),
    new PhotoCardObj("Taza con forma personalizada", taza3),
    new PhotoCardObj("¡Taza sorpresa!", taza4),
  ];

  return (
    <div>
      <Header />
      <h1 className="align-left">Nuestros productos</h1>
      <div className="scroll">
        <div className="cardsContainer">
          {photos.map((element, index) => (
            <PhotoCard
              key={index}
              photoName={element.name}
              photo={element.photo}
            />
          ))}
        </div>
      </div>
      <p className="sub-title">¡Elige tu propia taza!</p>
    </div>
  );
}

export default Gallery;
