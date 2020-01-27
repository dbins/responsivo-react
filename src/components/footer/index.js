import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

export default class Footer extends Component {
  render() {
    return (
      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <Row>
          <div className="col-12 col-md">
            <small className="d-block mb-3 text-muted">© 2017-2020</small>
          </div>
          <div className="col-12 col-md">
            <h5>Portfolio</h5>
            <ul class="list-unstyled text-small">
              <li>
                <a class="text-muted" href="/portfolio" rel="tag">
                  Web
                </a>
              </li>
              <li>
                <a class="text-muted" href="/portfolio" rel="tag">
                  Sistemas
                </a>
              </li>
              <li>
                <a class="text-muted" href="/ferramentas" rel="tag">
                  Ferramentas
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md">
            <h5>Aplicativos</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a class="text-muted" href="/aplicativos" rel="tag">
                  Android/IOS
                </a>
              </li>
              <li>
                <a class="text-muted" href="/aplicativos" rel="tag">
                  PWA
                </a>
              </li>
            </ul>
          </div>
          <div class="col-12 col-md">
            <h5>Sobre</h5>
            <ul class="list-unstyled text-small">
              <li>
                <a class="text-muted" href="/portfolio" rel="tag">
                  Perfil
                </a>
              </li>
              <li>
                <a class="text-muted" href="/portfolio" rel="tag">
                  Serviços
                </a>
              </li>
              <li>
                <a class="text-muted" href="/contato" rel="tag">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </Row>
      </footer>
    );
  }
}
