import React from "react";
import classes from "./style.module.scss";

const Button = ({ title }: { title: string }) => {
  return <button className={classes.button}>{title}</button>;
};

export default Button;
