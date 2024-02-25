import styled from "styled-components";

export const Container = styled.div`
  z-index: 5;

  position: absolute;

  width: 100%;
  height: 100vh;

  overflow-y: hidden;
  top: 0px;
  left: 0px;
`;

export const Screen = styled.div`
  width: 36%;
  height: 100%;
  background-color: #394573;
  opacity: 0.9;
  border-radius: 17px;

  @media (max-width: 1920px) {
    width: 37%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
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
  z-index: 5;
  padding-top: 15px;
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

export const IconMenu = styled.div`
  padding: 10px;
  font-size: 24px;
  width: 33%;
  height: 54px;
  justify-content: end;
  top: 0px;
  left: 90%;
  position: absolute;
  border-radius: 0px 17px 0px 0px;
  cursor: pointer;
  img {
    margin-right: 12px;
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
  width: 33%;
  height: 54px;
  justify-content: end;
  top: 0px;
  left: 56px;
  position: absolute;
  border-radius: 0px 17px 0px 0px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const MenuStart = styled.div`
  border-top: 1.13px solid #d9d9d9;
  width: 33%;
  height: 54px;
  top: 56px;
  left: 56px;
  position: absolute;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
  }
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
  width: 33%;
  top: 112px;
  left: 56px;
  position: absolute;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;

  @media (max-width: 768px) {
    width: 85%;
  }

  .carousel-arrow {
    background-color: transparent;
    position: absolute;

    display: flex;
    top: 35px;
    bottom: 64px;
    height: fit-content;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 100ms;
  }

  .carousel-arrow:hover,
  .carousel-arrow:focus {
    opacity: 1;
  }

  .carousel-arrow--prev {
    left: 0;
  }

  .carousel-arrow--next {
    right: 0;
  }

  .carousel-container {
    overflow-x: hidden;
    display: flex;
    align-items: center;
    scroll-snap-type: x mandatory;
    flex-flow: row nowrap;
    scroll-behavior: smooth;
    width: 92%;
  }

  .carousel-slide {
    aspect-ratio: 1;

    align-items: center;
    background-color: #bae;
    scroll-snap-align: center;
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
    width: 74px;
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

export const Square = styled.div`
  width: 80px;
  height: 80px;
  background-color: #5a6bab;
  margin: 15px;
  border-radius: 8px;
  font-size: 12px;
  padding: 5px;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    width: 70px;
    height: 70px;
    background-color: #5a6bab;
    margin: 25px;
    border-radius: 8px;
    font-size: 12px;
    padding: 5px;
    position: relative;
  }

  p {
    background-color: #222a49;
    font-weight: 700;
    width: 74px;
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
  top: 30%;
  left: 10%;
  border-radius: 8px;
  padding-top: 33px;

  @media (max-width: 768px) {
    border: 2px solid #ffa2ea;
    width: 180px;
    height: 180px;
    position: absolute;
    justify-content: center;
    align-items: center;
    text-align: center;
    left: 20%;
    border-radius: 8px;
    margin-top: 53px;

    img {
      width: 180px;
      height: 95px;
    }
  }

  @media (max-width: 1920px) {
    top: 35%;
  }
`;

export const FooterSquare = styled.div`
  background-color: #ffa2ea;
  opacity: 0.5;
  height: 49px;
  width: 209px;
  position: absolute;
  border-radius: 0px 0px 8px 8px;
  padding: 10px;
  font-size: 24px;
  color: #435079;
  font-weight: 800;

  @media (max-width: 768px) {
    height: 49px;
    width: 180px;
  }
`;

export const LabelRanking = styled.div`
  font-size: 100px;
  position: absolute;
  color: #ffa2ea;
  margin-left: 70px;
  margin-top: -20px;

  @media (max-width: 768px) {
    font-size: 80px;
    position: absolute;
    color: #ffa2ea;
    margin-left: 60px;
    margin-top: -20px;
  }
`;

export const LabelFooter = styled.div`
  font-size: 24px;
  position: absolute;
  color: #ffa2ea;

  margin-left: 70px;
  margin-top: 90px;

  @media (max-width: 768px) {
    font-size: 16px;
    position: absolute;
    color: #ffa2ea;
    margin-left: 70px;
    margin-top: 70px;
  }
`;

export const SquareMin = styled.div`
  border: 2px solid #6dfa17;
  width: 96px;
  height: 95px;
  position: absolute;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: 30%;
  left: 24%;
  border-radius: 8px;
  padding-top: 13px;

  @media (max-width: 1920px) {
    top: 35%;
    left: 25%;
  }

  @media (max-width: 768px) {
    left: 75%;
    margin-top: 53px;
    width: 80px;
    height: 80px;

    img {
      width: 80px;
      height: 40px;
    }
  }
`;

export const LabelRankingMin = styled.div`
  font-size: 36px;
  position: absolute;
  color: #6dfa17;
  margin-left: 27px;
  @media (max-width: 768px) {
    margin-top: -15px;
    margin-left: 20px;
  }
`;

export const FooterSquareMin = styled.div`
  background-color: #6dfa17;
  opacity: 0.5;
  height: 25px;
  width: 94px;
  position: absolute;
  border-radius: 0px 0px 8px 8px;
  padding: 0px;
  font-size: 16px;
  color: #435079;
  font-weight: 800;

  @media (max-width: 768px) {
    width: 80px;
  }
`;

export const SquareMin2 = styled.div`
  border: 2px solid #5afff5;
  width: 96px;
  height: 95px;
  position: absolute;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: 42%;
  left: 24%;
  border-radius: 8px;
  padding-top: 13px;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    left: 75% !important;
    margin-top: 15%;

    img {
      width: 80px;
      height: 40px;
    }
  }

  @media (max-width: 1920px) {
    top: 51%;
    left: 25%;
  }
`;

export const LabelRankingMin2 = styled.div`
  font-size: 36px;
  position: absolute;
  color: #5afff5;
  margin-left: 27px;

  @media (max-width: 768px) {
    margin-top: -15px;
    margin-left: 20px;
  }
`;

export const FooterSquareMin2 = styled.div`
  background-color: #5afff5;
  opacity: 0.5;
  height: 25px;
  width: 94px;
  position: absolute;
  border-radius: 0px 0px 8px 8px;
  padding: 0px;
  font-size: 16px;
  color: #435079;
  font-weight: 800;

  @media (max-width: 768px) {
    width: 80px;
  }
`;

export const SquareMin3 = styled.div`
  border: 2px solid #dedfe7;
  width: 96px;
  height: 95px;
  position: absolute;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: 525px;
  left: 10%;
  border-radius: 8px;
  padding-top: 13px;

  @media (max-width: 768px) {
    left: 20% !important;
    margin-top: 53px;
    width: 80px;
    height: 80px;

    img {
      width: 80px;
      height: 40px;
    }
  }

  @media (max-width: 1920px) {
    top: 68%;
    left: 10%;
  }
`;

export const LabelRankingMin3 = styled.div`
  font-size: 36px;
  position: absolute;
  color: #dedfe7;
  margin-left: 27px;

  @media (max-width: 768px) {
    margin-top: -15px;
    margin-left: 20px;
  }
`;

export const FooterSquareMin3 = styled.div`
  background-color: #dedfe7;
  opacity: 0.5;
  height: 25px;
  width: 94px;
  position: absolute;
  border-radius: 0px 0px 8px 8px;
  padding: 0px;
  font-size: 14px;
  color: #435079;
  font-weight: 800;

  @media (max-width: 768px) {
    width: 80px;
  }
`;

export const SquareMin4 = styled.div`
  border: 2px solid #ffe500;
  width: 96px;
  height: 95px;
  position: absolute;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: 525px;
  left: 24%;
  border-radius: 8px;
  padding-top: 13px;

  @media (max-width: 768px) {
    left: 75% !important;
    margin-top: 53px;
    width: 80px;
    height: 80px;

    img {
      width: 80px;
      height: 40px;
    }
  }

  @media (max-width: 1920px) {
    top: 68%;
    left: 25%;
  }
`;

export const LabelRankingMin4 = styled.div`
  font-size: 36px;
  position: absolute;
  color: #ffe500;
  margin-left: 27px;

  @media (max-width: 768px) {
    margin-top: -15px;
    margin-left: 20px;
  }
`;

export const FooterSquareMin4 = styled.div`
  background-color: #ffe500;
  opacity: 0.5;
  height: 25px;
  width: 94px;
  position: absolute;
  border-radius: 0px 0px 8px 8px;
  padding: 0px;
  font-size: 16px;
  color: #435079;
  font-weight: 800;

  @media (max-width: 768px) {
    width: 80px;
  }
`;

export const SquareMin5 = styled.div`
  border: 3px dashed #e6e2e2;
  width: 96px;
  height: 95px;
  position: absolute;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: 525px;
  left: 17%;
  border-radius: 8px;
  padding-top: 35px;

  @media (max-width: 768px) {
    left: 47.5% !important;
    margin-top: 53px;
    width: 80px;
    height: 80px;

    img {
      margin-top: -20px;
    }
  }

  @media (max-width: 1920px) {
    top: 68%;
    left: 17.5%;
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const FooterMenu = styled.div`
  padding: 10px;
  font-size: 16px;
  width: 33%;
  height: 54px;
  justify-content: end;
  top: 93%;
  display: flex;
  left: 56px;
  position: absolute;
  border-radius: 0px 17px 0px 0px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-color: #394579;
`;
