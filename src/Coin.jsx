import React, { useState } from "react";
import "./Coin.css";
import headsImage from "./assets/coin/heads.jpg";
import tailsImage from "./assets/coin/tails.jpg";

function Coin() {
  const [side, setSide] = useState("Heads"); // Sākotnējā puse

  function flipCoin() {
    const randomSide = Math.random() < 0.5 ? "Heads" : "Tails"; // Nejauša izvēle
    setSide(randomSide);
  }

  return (
    <div className="coin">
      <h2>Monētas mešana</h2>
      <button onClick={flipCoin}>Mest monētu</button>
      <p>Rezultāts: <strong>{side}</strong></p>
      <img
        src={side === "Heads" ? headsImage : tailsImage}
        alt={side}
        className="coin-image"
      />
    </div>
  );
}

export default Coin;