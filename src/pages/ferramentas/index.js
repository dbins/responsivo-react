import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Header from "../../components/header";
import Footer from "../../components/footer";
import PortfolioItem from "../../components/portfolioItem";
import Jumbo from "../../components/jumbo";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as FerramentasActions } from "../../store/ducks/ferramentas";

class Ferramentas extends Component {
  static propTypes = {
    ferramentasRequest: PropTypes.func.isRequired,
    ferramentas: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          image: PropTypes.string,
          caption: PropTypes.string,
          description: PropTypes.string
        })
      )
    })
  };

  componentDidMount() {
    this.props.ferramentasRequest();
  }

  render() {
    const conteudo = this.props.ferramentas.data.map(item => {
      return (
        <PortfolioItem
          imagem={item.image}
          titulo={item.caption}
          descricao={item.description}
        />
      );
    });
    return (
      <div>
        <Header />
        <Jumbo titulo="Ferramentas" descricao="Utilitários" />
        <Container fluid={true}>
          <Row>{conteudo}</Row>
          <Footer />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ferramentas: state.ferramentas
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(FerramentasActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Ferramentas);
