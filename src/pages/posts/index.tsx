// Packages
import Head from "next/head";

// Styles
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>10 de março de 2021</time>
            <strong>Quando usar useMemo e useCallback</strong>
            <p>
              Usualmente ouvimos dizer que o useCallback é sinônimo de boa
              prática e que temos que usar para melhorar o desempenho de
              funções.
            </p>
          </a>
          <a href="#">
            <time>10 de março de 2021</time>
            <strong>Quando usar useMemo e useCallback</strong>
            <p>
              Usualmente ouvimos dizer que o useCallback é sinônimo de boa
              prática e que temos que usar para melhorar o desempenho de
              funções.
            </p>
          </a>
          <a href="#">
            <time>10 de março de 2021</time>
            <strong>Quando usar useMemo e useCallback</strong>
            <p>
              Usualmente ouvimos dizer que o useCallback é sinônimo de boa
              prática e que temos que usar para melhorar o desempenho de
              funções.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
