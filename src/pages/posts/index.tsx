// Packages
import Head from "next/head";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";

// Services
import { getPrismicClient } from "../../services/prismic";

// Types
import { GetStaticProps } from "next";

// Styles
import styles from "./styles.module.scss";

interface IPost {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
}

interface IPostsProps {
  posts: IPost[];
}

export default function Posts({ posts }: IPostsProps) {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
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

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "publication")],
    {
      fetch: ["publication.title", "publication.content"],
      pageSize: 100,
    }
  );

  const posts = response.results.map((post) => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt:
        post.data.content.find((content) => content.type === "paragraph")
          ?.text ?? "",
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }
      ),
    };
  });

  return {
    props: {
      posts,
    },
  };
};
