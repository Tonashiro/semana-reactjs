// Libs
import React from "react";
import { useProjectState } from "../../context/project";
// Styles
import { Container } from "./styles";

// Images
import { FiArrowLeft } from "react-icons/fi";

const HomeButton = () => {
  const [project, setProject] = useProjectState();

  return (
    <Container>
      <button onClick={() => setProject(0)}>
        <FiArrowLeft size={50} color="#FFF" />
      </button>
    </Container>
  );
};

export default HomeButton;
