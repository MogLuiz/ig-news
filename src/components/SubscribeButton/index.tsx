// Packages
import React from "react";

// Hooks
import { signIn, useSession } from "next-auth/client";

// Styles
import styles from "./styles.module.scss";

interface ISubscribeButtonProps {
  priceId: string;
}

const SubscribeButton: React.FC<ISubscribeButtonProps> = ({ priceId }) => {
  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------

  const [session] = useSession();

  // -------------------------------------------------
  // Functions
  // -------------------------------------------------

  const handleSubscribe = () => {
    if (!session) {
      signIn("github");
      return;
    }
  };

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <button
      type="button"
      className={styles.subscribe_button}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
};

export default SubscribeButton;
