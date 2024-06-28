"use client";
import React, { useState } from "react";
import classes from "./style.module.scss";
import Button from "../Button/Button";
import { manufacturers, models, years } from "@/src/services/fakeCarsGenerator";
import { useSelectCar } from "@/src/application/selectCar";
import { useStore } from "@/src/services/store";
import { Car } from "@/src/domain/car";

const CarReviewFilter = () => {
  const [filter, setFilter] = useState<{
    manufacturer: string;
    model: string;
    year: number | string;
  }>({
    manufacturer: "",
    model: "",
    year: "",
  });

  const { cars }: { cars: Car[] } = useStore();
  const { selectCar } = useSelectCar(cars);
  const selectedCar = selectCar(filter);
  console.log(selectedCar);
  const onManufacturerSelect = (manufacturer: string) => {
    setFilter({ ...filter, manufacturer: manufacturer });
  };
  const onModelSelect = (model: string) => {
    setFilter({ ...filter, model: model });
  };
  const onYearSelect = (year: number | string) => {
    setFilter({ ...filter, year: year });
  };

  return (
    <div className={classes.container}>
      <label>
        <h5>Manufacturer</h5>
        <select
          name="pets"
          id="pet-select"
          onChange={(e) => onManufacturerSelect(e.target.value)}
        >
          <option value="">--Please choose an manufaturer--</option>
          {manufacturers.map((manufacturer) => (
            <option key={manufacturer} value={manufacturer}>
              {manufacturer}
            </option>
          ))}
        </select>
      </label>
      <label>
        <h5>Model</h5>
        <select
          name="pets"
          id="pet-select"
          onChange={(e) => onModelSelect(e.target.value)}
        >
          <option value="">--Please choose an model--</option>
          {models.map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </select>
      </label>
      <label>
        <h5>Year</h5>
        <select
          name="pets"
          id="pet-select"
          onChange={(e) => onYearSelect(e.target.value)}
        >
          <option value="">--Please choose an year--</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </label>
      <Button title="Go" />
    </div>
  );
};

export default CarReviewFilter;
