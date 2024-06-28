import React from "react";
import style from "./style.module.scss";
type Props = {
  name: string;
  onChange: Function;
  options: { value: string; name: string }[];
};

const Select = ({ name, onChange, options }: Props) => {
  return (
    <label >
      <h5>{name}</h5>
      <select
        className={style.select}
        name="pets"
        id="pet-select"
        onChange={(e) => onChange(e)}
      >
        <option value="">--Please choose an manufaturer--</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
