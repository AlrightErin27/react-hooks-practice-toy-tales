import React, { useState, useEffect } from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys }) {
  console.log("🧸", toys);

  const displayToysCards = toys.map((toy) => {
    return <ToyCard name={toy.name} image={toy.image} likes={toy.likes} />;
  });
  return <div id="toy-collection">{displayToysCards}</div>;
}

export default ToyContainer;
