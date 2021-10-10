// Packages
import React from "react";
import { FaGithub } from "react-icons/fa";

// Styles
import styles from "./styles.module.scss";

const SignInButton: React.FC = () => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <button type="button" className={styles.sign_in_button}>
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
};

export default SignInButton;
