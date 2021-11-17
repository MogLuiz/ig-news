/* eslint-disable @next/next/no-img-element */
//Packages
import Link from "next/link";

// Compontents
import SignInButton from "../SignInButton";

// Styles
import styles from "./styles.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header_container}>
      <div className={styles.header_content}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <Link href="/">
            <a className={styles.active}>Home</a>
          </Link>

          <Link href="/posts" prefetch>
            <a>Posts</a>
          </Link>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
};
