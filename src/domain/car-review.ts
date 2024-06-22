import { Car } from "./car";
import { User } from "./user";
export type Review = {
  grade: number;
  review: string;
};
export type CarReview = {
  id: UniqueId;
  car: Car;
  summary: string;
  pros: string[];
  cons: string[];
  news: string[];
  overwiew: string;
  competitors: string;
  reviewers: User[];
  performance: Review;
  comfort: Review;
  interior: Review;
  technology: Review;
  storage: Review;
  fuel_economy: Review;
  value: Review;
  note: string;
};
