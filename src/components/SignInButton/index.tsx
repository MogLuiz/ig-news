// Packages
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

// Functions
import { signIn, signOut, useSession } from "next-auth/client";

// Styles
import styles from "./styles.module.scss";

const SignInButton: React.FC = () => {
  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------
  const [session] = useSession();

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <button
      type="button"
      className={styles.sign_in_button}
      onClick={!session ? () => signIn("github") : () => signOut()}
    >
      <FaGithub color={session ? "#04d361" : "#eba417"} />
      {session ? (
        <>
          <span>{session.user.name}</span>
          <FiX color="#737380" className={styles.close_icon} />
        </>
      ) : (
        <span>Sign in with Github</span>
      )}
    </button>
  );
};

export default SignInButton;
