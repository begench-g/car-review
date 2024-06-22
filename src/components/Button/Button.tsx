import React from "react";
import styles from "./style.module.scss";

const Button = ({
  title,
  type = "primary",
  size = "medium",
}: {
  title: string;
  type: "primary" | "outline";
  size: "large" | "medium" | "small";
}) => {
  const sizes = {
    large: "button--large",
    medium: "button--medium",
    small: "button--small",
  };
  console.log(sizes[size]);
  return (
    <button
      className={`${styles.button} ${type == "primary" ? styles["button--primary"] : styles["button--outline"]} ${styles[sizes[size]]}`}
    >
      {title}
    </button>
  );
};

export default Button;
