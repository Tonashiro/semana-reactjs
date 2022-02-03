// Libs
import React, { useState } from "react";

// Styles
import { Container, Form } from "./styles";

export const Calculadora = () => {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const [mensagem, setMensagem] = useState("");

  function calcularIMC() {
    let alt: number;
    let imc: number;

    alt = Number(altura) / 100;
    imc = Number(peso) / (alt * alt);

    if (imc < 18.6) {
      setMensagem("Você está abaixo do peso! Seu IMC: " + imc.toFixed(2));
    } else if (imc >= 18.6 && imc < 24.9) {
      setMensagem("Peso ideal! Seu IMC: " + imc.toFixed(2));
    } else if (imc >= 24.9 && imc < 34.9) {
      setMensagem(
        "Você está levemente acima do peso! Seu IMC: " + imc.toFixed(2)
      );
    } else if (imc >= 34.9) {
      setMensagem("Cuidado Obesidade! Seu IMC: " + imc.toFixed(2));
    }
  }

  return (
    <Container>
      <h1>Calculadora IMC</h1>

      <Form>
        <input
          type="text"
          placeholder="Peso em (kg) Ex: 98"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <input
          type="text"
          placeholder="Altura em (cm) Ex: 180"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
        <button onClick={calcularIMC}>Calcular</button>
      </Form>

      <h2>{mensagem}</h2>
    </Container>
  );
};

export default Calculadora;
