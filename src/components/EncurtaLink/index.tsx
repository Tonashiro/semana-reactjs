// Libs
import React, { useState } from "react";

// Styles
import { Container, LinkContainer, Link } from "./styles";

// Images
import { FiLink } from "react-icons/fi";

// Components
import Menu from "../Menu";

export const EncurtaLink = () => {
  return (
    <Container>
      <div>
        <img src="/logo.png" alt="Encurta Link logo" />
        <h1>Encurta Link</h1>
        <span>Cole seu link para encurtar 👇</span>
      </div>

      <LinkContainer>
        <Link>
          <FiLink size={24} color="#FFF" />
          <input type="text" placeholder="Cole seu link aqui..." />
        </Link>
        <button>Encurtar Link</button>
      </LinkContainer>
      <Menu />
    </Container>
  );
};

export default EncurtaLink;
