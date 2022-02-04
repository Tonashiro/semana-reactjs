import styled, {keyframes} from "styled-components";

const slideY = keyframes`
  from {
    transform: translateY(150px)
  }
  to {
    transform: translateY(0)
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  background-color: #132742;

  >div {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 60px;
      color: #FFF;
    }

    span {
      margin: 14px 0 34px 0;

      font-size: 19px;
      color: #FFF
    }

    @media (max-width: 768px) {
      img {
        width: 200px;
      }

      h1 {
        font-size: 50px;
      }
    }
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 540px; 

  animation: ${slideY} 1.5s ease-in-out;

  button {
    width: 100%;
    height: 46px;

    margin-top: 8px;

    border-radius: 4px;
    border: 0;

    font-size: 16px;
    font-weight: bold;
    color: #000;
    cursor: pointer;

    transition: 0.5s;
    &:hover {
      transform: scale(1.05);
      opacity: 0.8;
    }
  }

  @media (max-width: 768px) {
    width: 85%;
  }
`;

export const Link = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 46px;

  border-radius: 4px;
  background-color: rgb(255, 255, 255, 0.15);

  svg {
    margin: 0 8px;
  }

  input {
    width: 100%;
    height: 46px;

    padding: 0;

    color: #FFF;
    border: 0;
    background-color: transparent;
    outline: none;

    font-size: 18px;

    &::placeholder {
      color: rgb(255, 255, 255, 0.8);
    }
  }
`;

