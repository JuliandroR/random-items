import React from "react";
import { Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function NumberDraw() {
  return (
    <form className="container-number-draw">
      <label>Qual o intervalo de números desejado:</label>
      <div className="container-interval">
        <input type="number" placeholder="Min." />
        <input type="number" placeholder="Max." />
      </div>

      <label>Quantos Números serão apresentados por sorteio:</label>
      <div className="container-range">
        <input type="range" min="1" max="100" />
        <span>1</span>
      </div>

      <Button size="lg">Sortear</Button>
    </form>
  );
}
