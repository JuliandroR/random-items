import React, { useState } from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import NumberDraw from "../NumberDraw";
import NameDraw from "../NameDraw";

export default function CardsContent() {
  const [draw, setDraw] = useState()
  const [textOption, setTextOption] = useState("O que deseja sortear?")
  function loadDraw(option){
    if(option === 1){
      setDraw(NumberDraw)
      setTextOption("Sorteio de Números")
    }
    if(option === 2){
      setDraw(NameDraw)
      setTextOption("Sorteio de Nomes")
    }
  }

  return (
    <Container fluid>
      <Row className="cards-content">
        <Col sm>
          <section className="options">
            <p>Escolha a opção:</p>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                {textOption}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onSelect={() => loadDraw(1)}>Sortear Números</Dropdown.Item>
                <Dropdown.Item onSelect={() => loadDraw(2)}>Sortear Nomes</Dropdown.Item>
                {/* <Dropdown.Item>Sortear Elementos Aleatórios</Dropdown.Item> */}
              </Dropdown.Menu>
            </Dropdown>

            {draw}

          </section>
        </Col>

        <Col sm>
          <section className="result">
            <h1>Resultado:</h1>
          </section>
        </Col>
      </Row>
    </Container>
  );
}
