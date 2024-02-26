import styled from "styled-components";

export const Container = styled.div`
  z-index: 9999;
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  top: 0px;
  left: 0px;
`;

export const Sidebar = styled.div`
  width: 56px;
  height: 100%;
  background-color: #222a49;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 28vh;
`;

export const Points = styled.div`
  width: 56px;
  height: 19px;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 15px;
  cursor: pointer;

  img {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
