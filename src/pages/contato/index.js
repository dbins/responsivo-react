import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Jumbo from "../../components/jumbo";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ContatoActions } from "../../store/ducks/contato";

class Contato extends Component {
  state = {
    nome: "",
    email: "",
    telefone: "",
    mensagem: ""
  };
  
  alterar = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  salvar = e => {
    e.preventDefault();

    //const {  tipo, endereco_novo, numero, complemento, bairro, cidade, estado, CEP} = this.state;
    const {  nome, email, telefone, mensagem} = this.state;
    let continuar = true;
    let msg = "";
     if (nome === "") {
      msg += 'Por favor informe o seu nome\n';
        continuar = false;
      }
      if (email === "") {
        msg += 'Por favor informe o seu e-mail\n';
        continuar = false;
      }
      if (telefone === "") {
        msg += 'Por favor informe um telefone para contato\n';
        continuar = false;
      }
      if (mensagem === "") {
        msg += 'Por favor preencha a mensagem\n';
        continuar = false;
      }
    if (continuar) {
      const dados = {
        nome: nome,
        email: email,
        telefone: telefone,
        mensagem: mensagem,
        
      }
      //Enviar para a API
      alert('Obrigado!');
    } else {
      alert(msg);
    }
  };


  render() {
    return (
      <div>
        <Header />
        <Jumbo
          titulo="Contato"
          descricao="Precisa de algum site ou aplicativo? Fale comigo!"
        />
        <Container fluid={true}>
          <Form>
            <Row>
              <Col md="12">
                <div className="mb-3">
                  <Label for="nome">Nome</Label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">N</span>
                    </div>
                    <Input
                      type="text"
                      className="form-control"
                      id="nome"
                      name="nome"
                      placeholder="Nome"
                      required=""
                      onChange={this.alterar}
                    />
                    <div className="invalid-feedback" style={{ width: "100%" }}>
                      Nome é obrigatório.
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <Label for="email">E-mail</Label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">@</span>
                    </div>
                    <Input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                      required=""
                      onChange={this.alterar}
                    />
                    <div className="invalid-feedback" style={{ width: "100%" }}>
                      E-mail é obrigatório
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <Label for="telefone">Telefone</Label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">T</span>
                    </div>
                    <Input
                      type="text"
                      class="form-control"
                      id="telefone"
                      name="telefone"
                      placeholder="Telefone"
                      required=""
                      onChange={this.alterar}
                    />
                    <div className="invalid-feedback" style={{ width: "100%" }}>
                      Telefone é obrigatório.
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <Label for="mensagem">Mensagem</Label>
                  <textarea
                    class="form-control"
                    id="mensagem"
                    name="mensagem"
                    rows="10"
                    onChange={this.alterar}
                  ></textarea>
                </div>
              </Col>
              <Col lg="12" className="text-center">
                <Button color="primary" size="lg" onClick={this.salvar}>
                  Enviar mensagem
                </Button>
              </Col>
            </Row>
          </Form>
          <Footer />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contato: state.contato
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ContatoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Contato);
