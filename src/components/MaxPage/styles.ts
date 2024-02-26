import styled from "styled-components";

export const Container = styled.div`
  z-index: 3000;
  position: absolute;

  width: 100%;
  height: 100%;

  overflow-y: hidden;
  overflow-x: hidden;
  top: 0px;
  left: 0px;

  .darkBG {
    background-image: url("../../assets/metaverso.png");
    width: 100vw;
    height: 100vh;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
  }
`;

export const Screen = styled.div`
  width: 100%;
  height: 100%;
  background-color: #394573;
  opacity: 0.9;
  z-index: 3;
  border-radius: 17px;
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

export const SquareChecked = styled.div`
  width: 80px;
  height: 80px;
  background-color: #5a6bab;
  margin: 15px;
  border-radius: 8px;
  font-size: 12px;
  padding: 5px;
  position: relative;
  border: 2px solid #fff;

  p {
    background-color: #222a49;
    font-weight: 700;
    width: 77px;
    overflow: 0.1;
    height: 30px;
    margin-top: -22px;
    margin-left: -5px;
    padding: 5px 0px 0px 0px;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    color: #fff;
    border-radius: 0px 0px 8px 8px;
  }
`;

export const IconMenu = styled.div`
  padding: 10px;
  font-size: 24px;
  width: 450px;
  height: 54px;
  justify-content: end;
  top: 0px;
  left: 1290px;
  position: absolute;
  border-radius: 0px 17px 0px 0px;
  cursor: pointer;

  img {
    margin-right: 12px;
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

export const Footer = styled.div`
  color: #fff;
  background-color: #394579;
  padding: 10px;
  font-size: 24px;
  width: 100%;
  height: 54px;
  justify-content: end;
  top: 0px;
  left: 56px;
  position: absolute;
  border-radius: 0px 17px 0px 0px;
`;

export const MenuStart = styled.div`
  border-top: 1.13px solid #d9d9d9;
  width: 100%;
  height: 54px;
  top: 56px;
  left: 56px;
  position: absolute;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
`;

export const Label = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 10px;
  margin-right: 15px;
  color: #fff;
  display: flex;
  flex-direction: column;
`;

export const Indicators = styled.div`
  border-top: 1.13px solid #d9d9d9;
  border-bottom: 1.13px solid #d9d9d9;
  height: 96px;
  width: 100%;
  overflow: hidden;
  top: 112px;
  left: 56px;
  position: absolute;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
`;

export const Square = styled.div`
  width: 80px;
  height: 80px;
  background-color: #5a6bab;
  margin: 15px;
  border-radius: 8px;
  font-size: 12px;
  padding: 5px;
  position: relative;

  p {
    background-color: #222a49;
    font-weight: 700;
    width: 80px;
    overflow: 0.1;
    height: 30px;
    margin-top: -15px;
    margin-left: -5px;
    padding: 5px 0px 0px 0px;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    color: #fff;
    border-radius: 0px 0px 8px 8px;
  }
`;

export const SquareMax = styled.div`
  border: 2px solid #ffa2ea;
  width: 210px;
  height: 210px;
  position: absolute;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: 220px;
  left: 30%;
  border-radius: 8px;
  padding-top: 60px;

  img {
    width: 210px;
    height: 100px;
    margin-bottom: -45px;
  }
`;

export const FooterSquare = styled.div`
  background-color: #ffa2ea;
  opacity: 0.5;
  height: 49px;
  width: 210px;
  position: absolute;
  border-radius: 0px 0px 8px 8px;
  padding: 10px;
  font-size: 16px;
  color: #435079;
  font-weight: 800;
  margin-bottom: -25px;
  margin-top: 45px;
`;

export const LabelRanking = styled.div`
  color: #ffa2ea;

  font-size: 100px;
  position: absolute;
  margin-left: 30%;
  margin-top: -40px;
`;

export const LabelFooter = styled.div`
  font-size: 24px;
  position: absolute;
  color: #ffa2ea;
  margin-left: 35%;
  margin-top: 70px;
`;

export const Center = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const SquareMin = styled.div`
  border: 2px solid #6dfa17;
  width: 210px;
  height: 210px;
  position: absolute;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: 220px;
  left: 60%;
  border-radius: 8px;
  padding-top: 60px;

  img {
    width: 210px;
    height: 100px;
    margin-bottom: -45px;
  }
`;

export const LabelRankingMin = styled.div`
  font-size: 100px;
  position: absolute;
  color: #6dfa17;
  margin-left: 20%;
  margin-top: -40px;
`;

export const FooterSquareMin = styled.div`
  background-color: #6dfa17;
  opacity: 0.5;
  height: 49px;
  width: 210px;
  position: absolute;
  border-radius: 0px 0px 8px 8px;
  padding: 10px;
  font-size: 16px;
  color: #435079;
  font-weight: 800;
  margin-bottom: -25px;
  margin-top: 45px;
`;

export const SquareMin2 = styled.div`
  border: 2px solid #5afff5;
  width: 210px;
  height: 210px;
  position: absolute;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: 220px;
  left: 45%;
  border-radius: 8px;
  padding-top: 60px;

  img {
    width: 210px;
    height: 100px;
    margin-bottom: -45px;
  }
`;

export const LabelRankingMin2 = styled.div`
  color: #5afff5;
  font-size: 100px;
  position: absolute;
  margin-left: 20%;
  margin-top: -40px;
`;

export const FooterSquareMin2 = styled.div`
  background-color: #5afff5;
  opacity: 0.5;
  height: 49px;
  width: 210px;
  position: absolute;
  border-radius: 0px 0px 8px 8px;
  padding: 10px;
  font-size: 16px;
  color: #435079;
  font-weight: 800;
  margin-bottom: -25px;
  margin-top: 45px;
`;

export const SquareMin3 = styled.div`
  border: 2px solid #dedfe7;
  width: 210px;
  height: 210px;
  position: absolute;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: 450px;
  left: 30%;
  border-radius: 8px;
  padding-top: 60px;

  img {
    width: 210px;
    height: 100px;
    margin-bottom: -45px;
  }
`;

export const LabelRankingMin3 = styled.div`
  color: #dedfe7;
  font-size: 100px;
  position: absolute;
  margin-left: 20%;
  margin-top: -40px;
`;

export const FooterSquareMin3 = styled.div`
  background-color: #dedfe7;
  opacity: 0.5;
  height: 49px;
  width: 210px;
  position: absolute;
  border-radius: 0px 0px 8px 8px;
  padding: 10px;
  font-size: 16px;
  color: #435079;
  font-weight: 800;
  margin-bottom: -25px;
  margin-top: 45px;
`;

export const SquareMin4 = styled.div`
  border: 2px solid #ffe500;
  width: 210px;
  height: 210px;
  position: absolute;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: 450px;
  left: 60%;
  border-radius: 8px;
  padding-top: 60px;

  img {
    width: 210px;
    height: 100px;
    margin-bottom: -45px;
  }
`;

export const LabelRankingMin4 = styled.div`
  color: #ffe500;
  font-size: 100px;
  position: absolute;
  margin-left: 20%;
  margin-top: -40px;
`;

export const FooterSquareMin4 = styled.div`
  background-color: #ffe500;
  opacity: 0.5;
  height: 49px;
  width: 210px;
  position: absolute;
  border-radius: 0px 0px 8px 8px;
  padding: 10px;
  font-size: 16px;
  color: #435079;
  font-weight: 800;
  margin-bottom: -25px;
  margin-top: 45px;
`;

export const SquareMin5 = styled.div`
  border: 3px dashed #e6e2e2;
  width: 210px;
  height: 210px;
  position: absolute;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: 450px;
  left: 45%;
  border-radius: 8px;
  padding-top: 60px;

  img {
    margin-bottom: -45px;
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0px 50px;
`;

export const FooterMenu = styled.div`
  padding: 10px;
  font-size: 16px;
  width: 100%;
  height: 54px;
  justify-content: end;
  top: 680px;
  display: flex;
  left: 56px;
  position: absolute;
  border-radius: 0px 17px 0px 0px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #394580;
`;
