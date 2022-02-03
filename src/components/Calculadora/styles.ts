import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  h1 {
    font-size: 50px;
    margin-bottom: 20px;
  }

  h2 {
    margin-top: 28px;
  }

  span {
    margin: 12px 0;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 500px;
  
  input {
    width: 100%;
    height: 46px;

    padding: 0;
    margin-bottom: 12px;

    color: #fff;
    background-color: #121212;
    border: 0;
    border-radius: 6px;
    
    font-size: 18px;
    text-align: center;
  }

  button {
    width: 100%;
    height: 46px;

    border: 0;
    border-radius: 6px;
    color: #FFF;
    background-color: #357aff;

    cursor: pointer;
    font-size: 18px;

    transition: 0.5s;

    &:hover {
      background-color: #4135ff;
    }
  }
`;

