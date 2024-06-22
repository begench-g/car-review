import { Cars } from "@/domain/cars";

export const clearSelection = (cars: Cars) => {
  return cars;
};

export const selectCar = (
  cars: Cars,
  manufacturer: string,
  year: number,
  model: string
) => {
  const selectedCars = cars.cars.filter(
    (car) =>
      car.year == year && car.manufacturer == manufacturer && car.model == model
  );
  return selectedCars;
};
export interface CarSelectionService {
  selectCar(
    cars: Cars,
    manufacturer: string,
    year: number,
    model: string
  ): Cars;
  clearSelection(cars: Cars): Cars;
}

export interface NotificationService {
  notify(message: string): void;
}
