"use client";
import Image from "next/image";
import background from "../../assets/background.png";

import { Container } from "../../components/Background/styles";

export default function Background() {
  return (
    <Container>
      <Image src={background} alt="metaverso" />
    </Container>
  );
}
