"use client";

import { Container, Points, Sidebar } from "./styles";
import avatar from "../../assets/EDUARDO_AVATAR 2.png";
import abrir from "../../assets/menu/abrir.png";
import Image from "next/image";

interface IModal {
  setIsOpenAvatar: Function;
  isOpenAvatar: Boolean;
  setIsOpenMenu: Function;
}

export default function AvatarPage({
  setIsOpenMenu,
  setIsOpenAvatar,
  isOpenAvatar,
}: IModal) {
  return (
    <Container>
      <Sidebar>
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
          <Image src={abrir} alt="fechar menu" />
        </Points>
      </Sidebar>
    </Container>
  );
}
