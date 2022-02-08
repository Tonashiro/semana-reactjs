// Libs
import React from "react";
import api from "../services/api";
// Components
import Calculadora from "@components/Calculadora";
import EncurtaLink from "@components/EncurtaLink";

const Home = () => {
  return (
    <>
      {/*  <Calculadora /> */}
      <EncurtaLink api={api} />
    </>
  );
};

export default Home;
