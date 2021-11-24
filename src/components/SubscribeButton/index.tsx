// Packages
import React from "react";

// Hooks
import { signIn, useSession } from "next-auth/client";

// Services
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";

// Types
import { IUser } from "./types";

// Styles
import styles from "./styles.module.scss";

const SubscribeButton: React.FC = () => {
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

      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      alert(err.message);
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
