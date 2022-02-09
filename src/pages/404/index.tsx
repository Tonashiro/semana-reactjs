// Libs
import React from "react";
import Link from "next/link";

// Styles
import { Container } from "../../styles/404";

const NotFound = () => {
  return (
    <Container>
      <img src="./notfound.png" alt="Imagem da página 404" />
      <h1>Página não encontrada</h1>
      <Link href="/">
        <a>Voltar para a Home</a>
      </Link>
    </Container>
  );
};

export default NotFound;
