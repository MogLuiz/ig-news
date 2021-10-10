/* eslint-disable @next/next/no-img-element */
// Components
import Head from "next/head";

// Styles
import styles from "./home.module.scss";

export default function Home() {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <>
      <Head>
        <title>Home | ignews</title>
      </Head>

      <main className={styles.content_container}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get acess to all the publications <br />
            <span>for $9.90 month</span>
          </p>
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}
