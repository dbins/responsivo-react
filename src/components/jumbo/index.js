import React from "react";
import { Jumbotron, Container } from "reactstrap";
import PropTypes from "prop-types";

const Jumbo = props => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">{props.titulo}</h1>
          <p className="lead">{props.descricao}</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

Jumbo.propTypes = {
  titulo: PropTypes.string,
  descricao: PropTypes.string
};

export default Jumbo;
