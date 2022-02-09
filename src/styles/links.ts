import styled, {keyframes} from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 100%;
  height: 100vh;

  background-color: #132742;

  >div {
    @media (max-width: 768px) {
      width: 90%;
    }
  }

  svg {
    cursor: pointer;
  }

  button {
    cursor: pointer;
  }
`;

export const Header = styled.div`
  display: flex;

  max-width: 1120px;
  margin: 32px auto 0 auto;

  svg { 
    margin-right: 14px;
  }

  h1 {
    color: #FFF;
  }

  @media (max-width: 768px) {
    width: 100%;
    h1 {
      font-size: 40px;
    }
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 700px;

  margin-top: 8px;
  
  &:last-child {
    margin-bottom: 18px;
  }

  button:first-child {
    display: flex;
    align-items: center;

    width: 100%;
    min-width: 80%;
    height: 46px;

    margin-right: 14px;
    padding: 0 14px;

    border-radius: 4px;
    border: 0;

    font-size: 18px;
    color: #FFF;
    background-color: rgb(255, 255, 255, 0.15);

    overflow: hidden;
    white-space: nowrap;

    svg {
      margin-right: 14px;
      overflow: visible;
    }
  }

  h2 {
    color: #FFF;
    margin-top: 30px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Delete = styled.button`
  background-color: transparent;
  border: 0;
`;


