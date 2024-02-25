"use client";

import {
  Avatar,
  Container,
  Icon,
  ImageSquare,
  Points,
  Sidebar,
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

import fecharMenu from "../../assets/menu/fecharMenu.png";

import Image from "next/image";
import MaxPage from "../MaxPage";
import { useState } from "react";
import MinPage from "../MinPage";
import AvatarPage from "../Avatar";

interface IModal {
  setIsOpenAvatar: Function;
  isOpenAvatar: Boolean;
  setIsOpenMenu: Function;
}

export default function Menu({
  setIsOpenMenu,
  setIsOpenAvatar,
  isOpenAvatar,
}: IModal) {
  return (
    <Container>
      <Sidebar>
        <Avatar> </Avatar>

        <Image
          src={avatar}
          onClick={() => {
            setIsOpenMenu(true);
            setIsOpenAvatar(false);
          }}
          alt="avatar"
        />
        <Points
          onClick={() => {
            setIsOpenAvatar(!isOpenAvatar);
          }}
        >
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
    </Container>
  );
}
