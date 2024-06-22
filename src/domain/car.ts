export type Car = {
  id: UniqueId;
  manufacturer: string;
  model: string;
  year: number;
  drivetrain: string;
  transmission: string;
  engine_volume: number;
  images: string[];
  average_price: number;
  rating: number;
  review_number: number;
  release_date: string;
};

export function rate(rating: number, car: Car) {
  const new_rating =
    (car.rating * car.review_number + rating) / (car.review_number + 1);
  car.rating = new_rating;
  car.review_number + 1;
  return car;
}
