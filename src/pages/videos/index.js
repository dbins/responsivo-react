import React, { Component, useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Header from "../../components/header";
import Footer from "../../components/footer";
import VideoItem from "../../components/videoItem";
import Jumbo from "../../components/jumbo";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as VideosActions } from "../../store/ducks/videos";

class Videos extends Component {
  static propTypes = {
    videosRequest: PropTypes.func.isRequired,
    videos: PropTypes.shape({
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
    this.props.videosRequest();
  }

  render() {
    const conteudo = this.props.videos.data.map(item => {
      return (
        <VideoItem
          imagem={item.image}
          titulo={item.caption}
          descricao={item.description}
        />
      );
    });

    return (
      <div>
        <Header />
        <Jumbo titulo="Vídeos" descricao="Sites e sistemas" />
        <Container>
          <Row>{conteudo}</Row>
          <Footer />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  videos: state.videos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(VideosActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Videos);
