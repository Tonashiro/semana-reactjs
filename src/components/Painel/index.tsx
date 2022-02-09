// Libs
import React, { useState, useEffect } from "react";
import { useProjectState } from "../../context/project";
import AOS from "aos";
import "aos/dist/aos.css";

// Styles
import { Container, Button } from "./styles";

const Painel = () => {
  const [project, setProject] = useProjectState();

  if (process.browser) {
    AOS.init();
  }

  return (
    <Container>
      <div data-aos="zoom-in">
        <Button onClick={() => setProject(1)}>Projeto 1</Button>
        <Button onClick={() => setProject(2)}>Projeto 2</Button>
      </div>
    </Container>
  );
};

export default Painel;
