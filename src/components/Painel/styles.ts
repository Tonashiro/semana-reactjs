import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #132742;
  
  >div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
  }
`;

export const Button = styled.button`
  position: relative;

  width: 250px;
  height: 80px;
  margin: 30px;

  color: #FFF;
  border: none;
  border-radius: 16px;
  font-size: 2rem;
  background-color: #357aff;
  
  outline: none;
  z-index: 1;
  transition: ease-in-out .3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    font-size: 2.2rem;
  }

  &:before {
    position: absolute;
    top: 50%;
    left: 50%;
    right: 50%;
    bottom: 50%;
    content: "";

    opacity: 0;
    border-radius: 16px;
    background-color: #5c91f5;

    transition: .5s all ease;
  }

  &:hover:before {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    
    opacity: 1;
    z-index: -1;
    transition: .5s all ease;
  }
`;