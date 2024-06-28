import { title } from "process";
import Select from "./Select";

export default {
  component: Select,
  title: "Select",
};

export const Default = {
  args: {
    name: "Name",
    onChange: (e: any) => console.log(e),
    options: [
      { value: 1, name: "One" },
      { value: 2, name: "Two" },
    ],
  },
};
