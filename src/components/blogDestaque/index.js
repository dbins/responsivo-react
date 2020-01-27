import React, { useState } from "react";
import PropTypes from "prop-types";

const BlogDestaque = props => {
  return (
    <div>
      <p>&nbsp;</p>
      <div className="jumbotron  text-white rounded bg-dark">
        <div class="container">
          <h1 className="display-4 font-italic">{props.titulo}</h1>
          <p className="lead my-3">{props.descricao}</p>
          <p className="lead mb-0">
            <a href="#" rel="tag" class="text-white font-weight-bold">
              Continue lendo...
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

BlogDestaque.propTypes = {
  titulo: PropTypes.string,
  descricao: PropTypes.string,
  id: PropTypes.number
};

export default BlogDestaque;
