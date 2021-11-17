/* eslint-disable @next/next/no-img-element */

// Compontents
import SignInButton from "../SignInButton";
import { ActiveLink } from "../ActiveLink";

// Styles
import styles from "./styles.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header_container}>
      <div className={styles.header_content}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <ActiveLink href="/" activeClassname={styles.active}>
            <a>Home</a>
          </ActiveLink>

          <ActiveLink href="/posts" prefetch activeClassname={styles.active}>
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
};
