import React from "react";
import { Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function NameDraw() {
  return (
    <form className="container-name-draw">
      <label>Quais os nomes que serão sorteados, separados por " , ":</label>
      <textarea placeholder="Nomes..."></textarea>

      <label>Quantos Números serão apresentados por sorteio:</label>
      <div className="container-range">
        <input type="range" min="1" max="100" />
        <span>1</span>
      </div>

      <Button size="lg">Sortear</Button>
    </form>
  );
}
