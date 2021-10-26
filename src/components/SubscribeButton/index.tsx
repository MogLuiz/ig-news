// Packages
import React from "react";

// Hooks
import { signIn, useSession } from "next-auth/client";

// Styles
import styles from "./styles.module.scss";
import { api } from "../../services/api";

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

  const handleSubscribe = async () => {
    if (!session) {
      signIn("github");
      return;
    }

    try {
      const response = await api.post("/subscribe");

      const { sessionId } = response as any;
    } catch {}
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
