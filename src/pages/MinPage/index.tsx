"use client";

import {
  Avatar,
  Button,
  Container,
  Footer,
  FooterMenu,
  FooterSquare,
  FooterSquareMin,
  FooterSquareMin2,
  FooterSquareMin3,
  FooterSquareMin4,
  Icon,
  IconMenu,
  ImageSquare,
  Indicators,
  Label,
  LabelFooter,
  LabelRanking,
  LabelRankingMin,
  LabelRankingMin2,
  LabelRankingMin3,
  LabelRankingMin4,
  MenuStart,
  Points,
  Screen,
  Sidebar,
  Square,
  SquareChecked,
  SquareMax,
  SquareMin,
  SquareMin2,
  SquareMin3,
  SquareMin4,
  SquareMin5,
} from "./styles";
import avatar from "../../assets/EDUARDO_AVATAR 2.png";
import menu from "../../assets/menu/menu.png";
import user from "../../assets/menu/user.png";
import notificacoes from "../../assets/menu/notificacoes.png";
import mensagens from "../../assets/menu/mensagens.png";
import calendario from "../../assets/menu/calendario.png";
import loja from "../../assets/menu/loja.png";
import points from "../../assets/menu/Mais.png";
import brasil from "../../assets/menu/brazil.png";
import sair from "../../assets/menu/sair.png";
import world from "../../assets/menustart/tabler_world.png";
import avatarmenu from "../../assets/menustart/user-avatar.png";

import perfil from "../../assets/menustart/Group.png";
import response from "../../assets/menustart/response.png";
import square from "../../assets/Square.png";
import squareMin from "../../assets/SquareMin.png";
import squareMin2 from "../../assets/SquareMin2.png";
import squareMin3 from "../../assets/SquareMin3.png";
import squareMin4 from "../../assets/SquareMin4.png";
import more from "../../assets/more.png";
import left from "../../assets/footermenu/left.png";
import search from "../../assets/footermenu/search.png";
import right from "../../assets/footermenu/right.png";
import image1 from "../../assets/indicators/image 1.png";
import image2 from "../../assets/indicators/image 2.png";
import image3 from "../../assets/indicators/image 3.png";
import image4 from "../../assets/indicators/image 4.png";
import image5 from "../../assets/indicators/image 5.png";
import max from "../../assets/max.png";
import fechar from "../../assets/Vector.png";
import fecharMenu from "../../assets/menu/fecharMenu.png";

import Image from "next/image";

import { useEffect, useState } from "react";

interface IModal {
  setIsOpenModal: Function;
  setIsOpenMenu: Function;
  setIsOpenAvatar: Function;
  openMenu: Boolean;
}

export default function MinPage({
  setIsOpenModal,
  setIsOpenMenu,
  setIsOpenAvatar,
  openMenu,
}: IModal) {
  useEffect(() => {
    setIsOpenMenu(true);
  }, []);

  function handleCarouselMove(positive: Boolean) {
    const carousel = document.querySelector(".carousel-container");
    const slide = document.querySelector(".carousel-slide");

    if (slide) {
      const slideWidth = slide.clientWidth;

      if (carousel) {
        carousel.scrollLeft = positive
          ? carousel.scrollLeft + slideWidth
          : carousel.scrollLeft - slideWidth;
      }
    }
  }

  return (
    <Container>
      <Screen>
        <Sidebar>
          <Avatar> </Avatar>

          <Image src={avatar} alt="avatar" />
          <Points onClick={() => setIsOpenMenu(!openMenu)}>
            <Image src={fecharMenu} alt="fechar menu" />
          </Points>

          <ImageSquare>
            <Icon>
              <Image src={menu} alt="menu" />
            </Icon>
          </ImageSquare>

          <ImageSquare>
            <Icon>
              <Image src={user} alt="menu" />
            </Icon>
          </ImageSquare>

          <ImageSquare>
            <Icon>
              <Image src={notificacoes} alt="menu" />
            </Icon>
          </ImageSquare>

          <ImageSquare>
            <Icon>
              <Image src={mensagens} alt="menu" />
            </Icon>
          </ImageSquare>
          <ImageSquare>
            <Icon>
              <Image src={calendario} alt="menu" />
            </Icon>
          </ImageSquare>

          <ImageSquare>
            <Icon>
              <Image src={loja} alt="menu" />
            </Icon>
          </ImageSquare>

          <ImageSquare>
            <Points>
              <Image src={points} alt="menu" />
            </Points>
          </ImageSquare>

          <ImageSquare>
            <Icon>
              <Image src={brasil} alt="menu" />
            </Icon>
          </ImageSquare>

          <ImageSquare>
            <Icon>
              <Image src={sair} alt="menu" />
            </Icon>
          </ImageSquare>
        </Sidebar>

        <Footer>
          Olá, <b>Eduardo_81!</b>
          <IconMenu>
            <Image
              src={max}
              onClick={() => setIsOpenModal(true)}
              alt="maximizar"
            />

            <Image
              src={fechar}
              onClick={() => {
                setIsOpenMenu(false);
                setIsOpenAvatar(true);
              }}
              alt="sair"
            />
          </IconMenu>
        </Footer>
        <MenuStart>
          <Image src={world} alt="mundo" />
          <Label>Início</Label>
          <Image src={avatarmenu} alt="mundo" />
          <Label>Avatar</Label>
          <Image src={perfil} alt="mundo" />
          <Label>Perfil</Label>
          <Image src={response} alt="mundo" />
          <Label>Responsável</Label>
        </MenuStart>

        <Indicators>
          <button
            className="carousel-arrow carousel-arrow--prev"
            onClick={() => handleCarouselMove(false)}
          >
            &#8249;
          </button>

          <button
            className="carousel-arrow carousel-arrow--next"
            onClick={() => handleCarouselMove(true)}
          >
            &#8250;
          </button>

          <div className="carousel-container" dir="ltr">
            <Square className="carousel-slide">
              <Image src={image1} alt="geral" />

              <p>Geral</p>
            </Square>
            <SquareChecked className="carousel-slide">
              <Image src={image2} alt="indicadores" />

              <p>Indicadores</p>
            </SquareChecked>
            <Square className="carousel-slide">
              <Image src={image3} alt="novidades" />

              <p>Novidades</p>
            </Square>

            <Square className="carousel-slide">
              <Image src={image4} alt="atalhos" />

              <p>Atalhos</p>
            </Square>
            <Square className="carousel-slide">
              <Image src={image5} alt="calendario" />

              <p>Calendário</p>
            </Square>
          </div>
        </Indicators>

        <SquareMax>
          <LabelRanking>2º</LabelRanking>
          <LabelFooter>Global</LabelFooter>

          <Image src={square} alt="ranking" />

          <FooterSquare>Ranking</FooterSquare>
        </SquareMax>

        <SquareMin>
          <LabelRankingMin>52</LabelRankingMin>

          <Image src={squareMin} alt="ranking" />

          <FooterSquareMin>Missões</FooterSquareMin>
        </SquareMin>

        <SquareMin2>
          <LabelRankingMin2>52</LabelRankingMin2>

          <Image src={squareMin2} alt="ranking" />

          <FooterSquareMin2>Missões</FooterSquareMin2>
        </SquareMin2>

        <SquareMin3>
          <LabelRankingMin3>8,7</LabelRankingMin3>

          <Image src={squareMin3} alt="ranking" />

          <FooterSquareMin3>Desempenho</FooterSquareMin3>
        </SquareMin3>

        <SquareMin4>
          <LabelRankingMin4>47</LabelRankingMin4>

          <Image src={squareMin4} alt="ranking" />

          <FooterSquareMin4>Amigos</FooterSquareMin4>
        </SquareMin4>

        <SquareMin5>
          <Image src={more} alt="ranking" />
        </SquareMin5>

        <FooterMenu>
          <Button>
            <Image src={left} alt="left" />
            <Label>Voltar</Label>
          </Button>
          <Button>
            <Image src={search} alt="search" />
            <Label>Procurar</Label>
          </Button>
          <Button>
            <Image src={right} alt="right" />
            <Label>Avançar</Label>
          </Button>
        </FooterMenu>
      </Screen>
    </Container>
  );
}
