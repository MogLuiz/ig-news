// Packages
import Head from "next/head";
import { useState } from "react";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";
import Link from "next/link";

// Services
import { getPrismicClient } from "../../services/prismic";

// Hooks
import { useSession } from "next-auth/client";

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
  // Hooks
  // -------------------------------------------------
  const [session] = useSession();

  // -------------------------------------------------
  // State
  // -------------------------------------------------
  const [redirectPreview] = useState(() => {
    if (session && !session?.activeSubscription) return true;

    if (!session) return true;

    return false;
  });

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
          {posts?.map((post) => (
            <Link
              key={post.slug}
              href={
                redirectPreview
                  ? `/posts/preview/${post.slug}`
                  : `/posts/${post.slug}`
              }
            >
              <a>
                <time>{post.updatedAt}</time>
                <strong>{post.title}</strong>
                <p>{post.excerpt}</p>
              </a>
            </Link>
          ))}
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
