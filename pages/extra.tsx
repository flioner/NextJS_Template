import Layout from "../components/layout/layout";
import Head from "next/head";
import s from "../styles/Home.module.css";
import React from "react";

export default function Home() {
  return (
    <Layout>
      <div className={s.scrollCont}>
        <Head>
          <title>Extra</title>
        </Head>
      </div>
    </Layout>
  );
}
