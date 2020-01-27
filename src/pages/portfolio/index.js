import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Header from "../../components/header";
import Footer from "../../components/footer";
import PortfolioItem from "../../components/portfolioItem";
import Jumbo from "../../components/jumbo";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PortfolioActions } from "../../store/ducks/portfolio";

class Portfolio extends Component {
  static propTypes = {
    portfolioRequest: PropTypes.func.isRequired,
    portfolio: PropTypes.shape({
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
    this.props.portfolioRequest();
  }

  render() {
    const conteudo = this.props.portfolio.data.map(item => {
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
        <Jumbo titulo="Portfólio" descricao="Projetos Web" />
        <Container fluid={true}>
          <Row>{conteudo}</Row>
          <Footer />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  portfolio: state.portfolio
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PortfolioActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
