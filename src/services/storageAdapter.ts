import { CarStorageService, UserStorageService } from "../application/ports";
import { useStore } from "./store";

export function useUserStorage(): UserStorageService {
  return useStore();
}

export function useCarStorage(): CarStorageService {
  return useStore();
}
