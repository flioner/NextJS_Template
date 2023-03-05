import React from "react";
import Head from "next/head";
import s from "../../styles/Home.module.css";
import { NavBar, Footer } from "../navigation/navbar";

export const siteTitle = "Site Title";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="icon.png" alt-text="" />
      </Head>

      {<></>}

      <div className={s.contContainer}>
        <div className={s.container}>
          <main>
            <NavBar /> {children} <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
