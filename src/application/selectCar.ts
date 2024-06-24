import { Cars } from "@domain/cars";
import { useCarStorage } from "@services/storageAdapter";
import { Car } from "@domain/car";

export const clearSelection = (cars: Cars) => {
  return cars;
};

export function useSelectCar(cars: Car[]) {
  const selectCar = ({
    manufacturer,
    year,
    model,
  }: {
    manufacturer: string;
    year: number | string;
    model: string;
  }) => {
    const selectedCar = cars.filter(
      (car) =>
        car.year == year &&
        car.manufacturer == manufacturer &&
        car.model == model
    );
    return selectedCar;
  };
  return { selectCar };
}
