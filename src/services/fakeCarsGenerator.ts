import { v4 as uuidv4 } from "uuid"; // You can use uuid for generating unique IDs
import { Car } from "../domain/car";
import { Cars } from "../domain/cars";

// Utility function to generate a random integer between min and max
const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Utility function to generate a random float between min and max
const getRandomFloat = (min: number, max: number, decimals: number) => {
  const str = (Math.random() * (max - min + 1) + min).toFixed(decimals);
  return parseFloat(str);
};

// Utility function to generate a random date
const getRandomDate = (start: Date, end: Date) => {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return date.toISOString().split("T")[0]; // Get only the date part in YYYY-MM-DD format
};

export const manufacturers = [
  "Toyota",
  "Honda",
  "Ford",
  "Chevrolet",
  "Nissan",
  "BMW",
  "Mercedes-Benz",
  "Volkswagen",
  "Audi",
  "Kia",
];
export const models = [
  "Model S",
  "Civic",
  "F-150",
  "Camry",
  "Accord",
  "Mustang",
  "Cruze",
  "Altima",
  "3 Series",
  "E-Class",
];

export const years = [2000, 2001, 2002, 2003, 2004];

const drivetrains = ["FWD", "RWD", "AWD", "4WD"];
const transmissions = ["Manual", "Automatic", "CVT"];

const generateFakeCar = (): Car => {
  return {
    id: uuidv4(),
    manufacturer: manufacturers[getRandomInt(0, manufacturers.length - 1)],
    model: models[getRandomInt(0, models.length - 1)],
    year: years[getRandomInt(0, years.length - 1)],
    drivetrain: drivetrains[getRandomInt(0, drivetrains.length - 1)],
    transmission: transmissions[getRandomInt(0, transmissions.length - 1)],
    engine_volume: getRandomFloat(1.0, 5.0, 1),
    images: [`https://fakeimg.pl/250x100/?text=Car${getRandomInt(1, 100)}`],
    average_price: getRandomInt(20000, 100000),
    rating: getRandomFloat(1, 5, 1),
    review_number: getRandomInt(0, 5000),
    release_date: getRandomDate(new Date(2000, 0, 1), new Date()),
  };
};

export const generateFakeCars = (count: number): Car[] => {
  const cars: Car[] = [];
  for (let i = 0; i < count; i++) {
    cars.push(generateFakeCar());
  }
  return cars;
};
