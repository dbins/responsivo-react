import React, { Component, useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Header from "../../components/header";
import Footer from "../../components/footer";
import CarouselComponent from "../../components/carousel";
import Habilidade from "../../components/habilidade";
import Logo from "../../img/logo.png";
import Habilidade1 from "../../habilidades/analise.png";
import Habilidade2 from "../../habilidades/sites.png";
import Habilidade3 from "../../habilidades/integracao.png";
import Habilidade4 from "../../habilidades/dashboard.png";
import Habilidade5 from "../../habilidades/database.png";
import Habilidade6 from "../../habilidades/aplicativos.png";
import PortfolioItem from "../../components/portfolioItem";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as HomeActions } from "../../store/ducks/home";

const items = [
  {
    id: 1,
    image: Habilidade1,
    caption: "Análise de Dados"
  },
  {
    id: 2,
    image: Habilidade2,
    caption: "Criação de sites"
  },
  {
    id: 3,
    image: Habilidade3,
    caption: "Integração entre sistemas"
  },
  {
    id: 4,
    image: Habilidade4,
    caption: "Dashboards"
  },
  {
    id: 5,
    image: Habilidade5,
    caption: "Banco de Dados"
  },
  {
    id: 6,
    image: Habilidade6,
    caption: "Aplicativos"
  }
];

const habilidades = items.map(item => {
  return <Habilidade imagem={item.image} titulo={item.caption} />;
});

class Home extends Component {
  static propTypes = {
    homeRequest: PropTypes.func.isRequired,
    home: PropTypes.shape({
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
    this.props.homeRequest();
  }
  render() {
    const destaques = this.props.home.data.map(item => {
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
        <CarouselComponent />
        <Container>
          <Row>
            <Col lg="12">
              <p>&nbsp;</p>
              <p align="center">
                <img className="img-responsive" src={Logo} alt="Logo" />
              </p>
              <p class="text-center">
                <strong>Programação Web e Mobile</strong>
              </p>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <p>
                Seja bem vindo! Sou um profissional de inform&aacute;tica da
                cidade de S&atilde;o Paulo, que trabalha com a
                cria&ccedil;&atilde;o de sites, sistemas para a web,
                e-commerces, dashboards e aplicativos. Neste site, voc&ecirc;
                vai poder ver v&aacute;rios trabalhos e projetos realizados por
                mim.{" "}
              </p>
              <p>
                Todo problema espera por uma solução. Deixe eu ajudar você a
                atingir seus objetivos!
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg="12" className="text-center">
              <Button color="primary" size="lg" disabled>
                Currículo
              </Button>
              <p>&nbsp;</p>
            </Col>
          </Row>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Habilidades</h2>
              <hr />
            </Col>
          </Row>
          <Row>{habilidades}</Row>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Projetos em destaque</h2>
              <hr />
            </Col>
          </Row>
          <Row>{destaques}</Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  home: state.home
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(HomeActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
