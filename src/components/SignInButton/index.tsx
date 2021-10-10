// Packages
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

// Styles
import styles from "./styles.module.scss";

const SignInButton: React.FC = () => {
  // -------------------------------------------------
  // Constants
  // -------------------------------------------------
  const isUserLoggedIn = true;

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <button type="button" className={styles.sign_in_button}>
      <FaGithub color={isUserLoggedIn ? "#04d361" : "#eba417"} />
      {isUserLoggedIn ? (
        <>
          <span>Luiz Henrique</span>
          <FiX color="#737380" className={styles.close_icon} />
        </>
      ) : (
        <span>Sign in with Github</span>
      )}
    </button>
  );
};

export default SignInButton;
