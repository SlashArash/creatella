import React from "react";

import { Container, Description, Logo } from "./styles";
import logo from "assets/images/logo.webp";

const Header = () => {
  return (
    <Container>
      <Logo src={logo} alt="Product Grids" />
      <Description>Best collection of ASCII faces</Description>
    </Container>
  );
};

export default Header;
