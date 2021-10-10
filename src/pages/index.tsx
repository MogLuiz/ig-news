// Components
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <>
      <Head>
        <title>Home | ignews</title>
      </Head>

      <main>
        <section>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get acess to all the publications <br />
            <span>for $9.90 month</span>
          </p>
        </section>

        <Image
          src="/images/avatar.svg"
          alt="Girl coding"
          width="450px"
          height="450px"
        />
      </main>
    </>
  );
}
