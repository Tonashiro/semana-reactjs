import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  background-color: #132742;

  img {
    max-width: 300px;
    margin: 20px 0;
  }

  h1 {
    color: #FFF;
  }

  a {
    color: #132742;
    background-color: #FFF;
    text-decoration: none;
    font-weight: bold;

    padding: 12px 18px;
    margin: 20px 0;
    border-radius: 4px;

    transition: 0.5s;

    &:hover {
      transform: scale(1.03);
      opacity: 0.8;
    }
  }
`;