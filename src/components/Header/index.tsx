/* eslint-disable @next/next/no-img-element */
import SignInButton from "../SignInButton";

// Styles
import styles from "./styles.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header_container}>
      <div className={styles.header_content}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <a className={styles.active} href="#">
            Home
          </a>
          <a href="#">Posts</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
};
