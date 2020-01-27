import React, { useState } from "react";
import {
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import PropTypes from "prop-types";

const VideoItem = props => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <Col md="6">
      <Card>
        <a href="#" onClick={toggle}>
          <CardImg
            top
            width="100%"
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22347%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20347%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16fd9326209%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16fd9326209%22%3E%3Crect%20width%3D%22347%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.203125%22%20y%3D%22120.103125%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            alt={props.titulo}
          />
        </a>
        <CardBody>
          <CardTitle>{props.titulo}</CardTitle>
          <CardText>{props.descricao}</CardText>
          <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted">9 mins</small>
          </div>
        </CardBody>
      </Card>
      <Modal size="xl" isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{props.titulo}</ModalHeader>
        <ModalBody>
          <div className="embed-responsive embed-responsive-16by9">
            <video controls>
              <source src="videos/dash_votorantim.mp4" type="video/mp4" />
            </video>
          </div>
        </ModalBody>
      </Modal>
    </Col>
  );
};

VideoItem.propTypes = {
  titulo: PropTypes.string,
  descricao: PropTypes.string
};

export default VideoItem;
