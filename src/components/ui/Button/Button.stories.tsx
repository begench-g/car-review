import { title } from "process";
import Button from "./Button";

export default {
  component: Button,
  title: "Button",
};

export const Default = {
  args: {
    title: "Button",
  },
};

export const Outline = {
  args: {
    title: "Button",
    type: "outline",
  },
};

export const Large = {
  args: {
    title: "Button",
    size: "large",
  },
};
export const Medium = {
  args: {
    title: "Button",
    size: "medium",
  },
};
export const Small = {
  args: {
    title: "Button",
    size: "small",
  },
};
