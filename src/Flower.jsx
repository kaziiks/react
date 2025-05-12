import React, { useState } from "react";
import "./Flower.css";

function Flower() {
  const [petals, setPetals] = useState(Math.floor(Math.random() * 10) + 5); // Nejaušs ziedlapiņu skaits
  const [result, setResult] = useState("");

  function pluckPetal() {
    if (petals > 0) {
      setResult(petals % 2 === 0 ? "Nemīl" : "Mīl");
      setPetals(petals - 1);
    }
  }

  return (
    <div className="flower">
      <h2>Ziedlapiņu noraušana</h2>
      <p>Atlikušās ziedlapiņas: <strong>{petals}</strong></p>
      <button onClick={pluckPetal} disabled={petals === 0}>
        Noraut ziedlapiņu
      </button>
      {petals === 0 && <p>Rezultāts: <strong>{result}</strong></p>}
    </div>
  );
}

export default Flower;