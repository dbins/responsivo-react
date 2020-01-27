import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Header from "../../components/header";
import Footer from "../../components/footer";
import BlogItem from "../../components/blogItem";
import BlogDestaque from "../../components/blogDestaque";
import Jumbo from "../../components/jumbo";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as BlogActions } from "../../store/ducks/blog";

class Blog extends Component {
  static propTypes = {
    blogRequest: PropTypes.func.isRequired,
    blog: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          image: PropTypes.string,
          caption: PropTypes.string,
          category: PropTypes.string,
          description: PropTypes.string
        })
      )
    })
  };

  componentDidMount() {
    this.props.blogRequest();
  }

  render() {
    const conteudo = this.props.blog.data.map(item => {
      return (
        <BlogItem
          imagem={item.image}
          titulo={item.caption}
          categoria={item.category}
          descricao={item.description}
        />
      );
    });

    return (
      <div>
        <Header />
        <BlogDestaque titulo="Calculando distâncias com SQL" descricao="Aprenda as várias formas de calcular distâncias entre dois pontos." id="1"/>
        <Container>
          <Row>{conteudo}</Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  blog: state.blog
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(BlogActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
