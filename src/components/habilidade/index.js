import React, { useState } from "react";
import { Col } from "reactstrap";

const Habilidade = props => {
  return (
    <Col sm="4">
      <div className="text-center">
        <img src={props.imagem} border="0" alt={props.titulo} />
      </div>
      <p className="text-center">{props.titulo}</p>
    </Col>
  );
};

export default Habilidade;
