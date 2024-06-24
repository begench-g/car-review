import { Cars } from "@domain/cars";
import { User, UserName } from "../domain/user";

export interface UserStorageService {
  user?: User;
  updateUser(user: User): void;
}

export interface CarStorageService {
  cars?: Cars;
}

export interface NotificationService {
  notify(message: string): void;
}

export interface AuthenticationService {
  auth(name: UserName, email: Email): Promise<User>;
}

export interface CarSelectionService {
  selectCar(
    cars: Cars,
    manufacturer: string,
    year: number,
    model: string
  ): Cars;
  clearSelection(cars: Cars): Cars;
}
