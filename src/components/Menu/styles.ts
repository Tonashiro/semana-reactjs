import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 20px;
  right: 5%;
  display: flex;
  flex-direction: row !important;
  align-items: center;
  font-weight: bold;

  a {
    margin: 0 10px;

    transition: 0.5s;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 12px 24px;
  margin-left: 10px;

  border-radius: 6px;

  font-weight: bold;
  color: #000;
  background-color: #FFF;

  cursor: pointer;
  transition: 0.5s;

  &:hover {
    opacity: 0.8;
  }
`;