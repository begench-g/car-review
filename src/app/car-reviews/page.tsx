import Hero from "@components/ui/Hero";
import CarReviewFilter from "@components/ui/Filters/CarReviewFilter";
import React from "react";
import Cars from "@/src/components/ui/Cars/cars";
import { Provider } from "@/src/services/store";

const CarReview = () => {
  return (
    <div>
      <Hero />
      <Provider>
        <CarReviewFilter />
        <Cars />
      </Provider>
    </div>
  );
};

export default CarReview;
