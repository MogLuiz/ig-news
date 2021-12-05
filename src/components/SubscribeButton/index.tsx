// Packages
import React from "react";
import { useRouter } from "next/router";

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
  const router = useRouter();

  // -------------------------------------------------
  // Functions
  // -------------------------------------------------

  const handleSubscribe = async () => {
    if (!session) {
      signIn("github");
      return;
    }

    if (session.activeSubscription) {
      router.push("./posts");
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
