"use client";
import { Car } from "@/src/domain/car";
import { useStore } from "@/src/services/store";
import React from "react";

const Cars = () => {
  const { cars }: { cars: Car[] } = useStore();
  return (
    <div>
      {cars.map((car) => (
        <div key={car.id}>
          {car.manufacturer} |{car.model} |{car.year}
        </div>
      ))}
    </div>
  );
};

export default Cars;
