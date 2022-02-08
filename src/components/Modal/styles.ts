import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 18px;
  display: flex;
  flex-direction: column;
  width: 700px;

  padding: 14px;

  border-radius: 4px;
  background-color: #FFF;

  button { 
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }

  span {
    align-self: flex-start !important; 
    margin: 14px 0 !important;
    color: #A7A7A7 !important;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const Link = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 38px;

  padding: 0 14px;
  background-color: #132742 !important;
  border: 0;
  border-radius: 4px;
  color: #FFF;
`;