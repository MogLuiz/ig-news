// Components
import Head from "next/head";
import { Header } from "../components/Header";

export default function Home() {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <>
      <Head>
        <title>Início | ignews</title>
      </Head>
      <Header />
    </>
  );
}
