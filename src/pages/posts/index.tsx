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

      <main>
        <div>
          <a>
            <time>10 de março de 2021</time>
            <strong>Quando usar useMemo e useCallback</strong>
            <p>
              Usualmente ouvimos dizer que o useCallback é sinônimo de boa
              prática e que temos que usar para melhorar o desempenho de
              funções.
            </p>
          </a>
          <a>
            <time>10 de março de 2021</time>
            <strong>Quando usar useMemo e useCallback</strong>
            <p>
              Usualmente ouvimos dizer que o useCallback é sinônimo de boa
              prática e que temos que usar para melhorar o desempenho de
              funções.
            </p>
          </a>
          <a>
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
