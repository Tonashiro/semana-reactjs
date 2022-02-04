// Libs
import React, { useState } from "react";
import Link from "next/link";
// Styles
import { Container, Header, LinkContainer, Delete } from "./styles";

// Images
import { FiLink, FiArrowLeft, FiTrash } from "react-icons/fi";

const Links = () => {
  return (
    <Container>
      <div>
        <Header>
          <Link href="/" passHref>
            <FiArrowLeft size={38} color="#FFF" />
          </Link>
          <h1>Meus Links</h1>
        </Header>

        <LinkContainer>
          <button>
            <FiLink size={18} color="#FFF" />
            https://sujeitoprogramador.com
          </button>
          <Delete>
            <FiTrash size={24} color="#FF5454" />
          </Delete>
        </LinkContainer>
      </div>
    </Container>
  );
};

export default Links;
