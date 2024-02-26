"use client";

import styles from "./page.module.css";
import Background from "../pages/Background";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import AvatarPage from "../pages/Avatar";

export default function Home() {
  return (
    <main className={styles.main}>
      <Background />
      <AvatarPage />
    </main>
  );
}
