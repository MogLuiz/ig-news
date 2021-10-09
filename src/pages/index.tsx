// Components
import Head from "next/head";

// Styles
import styles from "../styles/home.module.scss";

export default function Home() {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <>
      <Head>
        <title>Início | ignews</title>
      </Head>
      <h1 className={styles.title}>Hello world</h1>
    </>
  );
}
