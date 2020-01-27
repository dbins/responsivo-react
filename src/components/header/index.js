import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link, withRouter } from "react-router-dom";
const Header = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="light" expand="md" className="bg-dark navbar-dark" light>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <NavbarBrand href="/" className="mr-auto">
          :: BINS ::
        </NavbarBrand>

        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/portfolio">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/aplicativos">Aplicativos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/ferramentas/">Ferramentas</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/videos/">Vídeos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blog/">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contato">Contato</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
