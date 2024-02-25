"use client";

import { Container, Points, Sidebar } from "./styles";
import avatar from "../../assets/EDUARDO_AVATAR 2.png";
import abrir from "../../assets/menu/abrir.png";
import Image from "next/image";
import { useState } from "react";
import MinPage from "../MinPage";
import MaxPage from "../MaxPage";
import Menu from "../Menu";

export default function AvatarPage() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(true);
  const [isOpenAvatar, setIsOpenAvatar] = useState(true);

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
      {isOpenMenu && (
        <MinPage
          setIsOpenModal={setIsOpenModal}
          setIsOpenMenu={setIsOpenMenu}
          openMenu={isOpenMenu}
          setIsOpenAvatar={setIsOpenAvatar}
        />
      )}

      {isOpenModal && (
        <MaxPage
          setIsOpen={setIsOpenModal}
          setIsOpenAvatar={setIsOpenAvatar}
          setIsOpenMenu={setIsOpenMenu}
          openMenu={isOpenMenu}
        />
      )}
      {isOpenAvatar && (
        <Menu
          isOpenAvatar={isOpenAvatar}
          setIsOpenAvatar={setIsOpenAvatar}
          setIsOpenMenu={setIsOpenMenu}
        />
      )}
    </Container>
  );
}
