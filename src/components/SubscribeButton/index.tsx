// Packages
import React from "react";

// Styles
import styles from "./styles.module.scss";

interface ISubscribeButtonProps {
  priceId: string;
}

const SubscribeButton: React.FC<ISubscribeButtonProps> = ({ priceId }) => {
  return (
    <button type="button" className={styles.subscribe_button}>
      Subscribe now
    </button>
  );
};

export default SubscribeButton;
