// Libs
import React from "react";
import Link from "next/link";
// Styles
import { Container, Links } from "./styles";

// Images
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Menu = () => {
  return (
    <Container>
      <Link href="https://github.com/tonashiro">
        <a target="_blank">
          <BsGithub size={24} color="#FFF" />
        </a>
      </Link>

      <Link href="https://www.linkedin.com/in/vinicius-tonashiro-de-souza-0032561ab/">
        <a target="_blank">
          <BsLinkedin size={24} color="#FFF" />
        </a>
      </Link>

      <Link href="/links">
        <Links>Meus Links</Links>
      </Link>
    </Container>
  );
};

export default Menu;
