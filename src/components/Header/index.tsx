/* eslint-disable @next/next/no-img-element */
//Packages
import Link from "next/link";
import { useRouter } from "next/router";

// Compontents
import SignInButton from "../SignInButton";

// Styles
import styles from "./styles.module.scss";

export const Header: React.FC = () => {
  const { asPath } = useRouter();

  console.log(asPath);

  return (
    <header className={styles.header_container}>
      <div className={styles.header_content}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <Link href="/">
            <a className={`${asPath === "/" ? styles.active : ""}`}>Home</a>
          </Link>

          <Link href="/posts" prefetch>
            <a className={`${asPath === "/posts" ? styles.active : ""}`}>
              Posts
            </a>
          </Link>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
};
