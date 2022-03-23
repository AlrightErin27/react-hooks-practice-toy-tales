import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  //GET from db.json when page renders
  useEffect(() => {
    fetch("http://localhost:3000/toys")
      .then((r) => r.json())
      .then(setToys)
      .catch((error) => {
        console.log("🥵 🥵 🥵", error);
      });
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>

      <ToyContainer toys={toys} />
    </>
  );
}

export default App;
