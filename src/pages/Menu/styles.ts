import styled from "styled-components";

export const Container = styled.div`
  z-index: 2;
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
`;

export const Avatar = styled.div`
  top: 0px;
  left: 0px;
`;

export const Icon = styled.div`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  padding-top: 15px;

  img {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const ImageSquare = styled.div`
  :hover {
    background: #394573;

    img {
      filter: opacity(90%);
    }
  }
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
