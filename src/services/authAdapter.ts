import { Phone, UserName } from "../domain/user";

import { AuthenticationService } from "../application/ports";
import { fakeApi } from "./api";

export function useAuth(): AuthenticationService {
  return {
    auth(name: UserName, phone: Phone) {
      return fakeApi({
        name,
        phone,
        id: "sample-user-id",
      });
    },
  };
}
