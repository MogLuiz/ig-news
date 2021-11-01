// Packages
import React from "react";

// Hooks
import { signIn, useSession } from "next-auth/client";

// Services
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";

// Types
import { ISubscribeButtonProps, IUser } from "./types";

// Styles
import styles from "./styles.module.scss";

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

      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      alert(err.message);
    }
  };

  const handleUserInscribe = async () => {
    if (!session) {
      signIn("github");
      return;
    }

    try {
      const responseSubscribe = await api.post("/subscribe/:id");

      const { sessionIdSubscribe } = responseSubscribe.data;

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId: sessionIdSubscribe });
    } catch (err) {
      alert("user isn't subscribe");
    }
  };

  const handleSubmitUser = async (user: IUser) => {
    const { adress, age, name } = user;

    const { street, isDowntown } = adress;

    if (!adress.isDowntown) {
      isDowntown: false;
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
