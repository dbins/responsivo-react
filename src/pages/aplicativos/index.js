import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Header from "../../components/header";
import Footer from "../../components/footer";
import PortfolioItem from "../../components/portfolioItem";
import Jumbo from "../../components/jumbo";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as AplicativosActions } from "../../store/ducks/aplicativos";

class Aplicativos extends Component {
  static propTypes = {
    aplicativosRequest: PropTypes.func.isRequired,
    aplicativos: PropTypes.shape({
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
    this.props.aplicativosRequest();
  }
  render() {
    const conteudo = this.props.aplicativos.data.map(item => {
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
        <Jumbo
          titulo="Aplicativos"
          descricao="Aplicativos para Android e IOS e PWAs"
        />
        <Container fluid={true}>
          <Row>{conteudo}</Row>
          <Footer />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  aplicativos: state.aplicativos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AplicativosActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Aplicativos);
