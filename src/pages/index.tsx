// Libs
import React from "react";
import api from "../services/api";
import { useProjectState } from "../context/project";

// Components
import Calculadora from "@components/Calculadora";
import EncurtaLink from "@components/EncurtaLink";
import Painel from "@components/Painel";
import HomeButton from "@components/HomeButton";

const Home = () => {
  const [project, setProject] = useProjectState();

  return (
    <>
      <HomeButton />
      {project === 0 ? <Painel /> : null}
      {project === 1 ? <Calculadora /> : null}
      {project === 2 ? <EncurtaLink api={api} /> : null}
    </>
  );
};

export default Home;
