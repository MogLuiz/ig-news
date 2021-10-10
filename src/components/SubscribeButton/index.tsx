// Packages
import React from "react";

// Styles
import styles from "./styles.module.scss";

const SubscribeButton: React.FC = () => {
  return (
    <button type="button" className={styles.subscribe_button}>
      Subscribe now
    </button>
  );
};

export default SubscribeButton;
