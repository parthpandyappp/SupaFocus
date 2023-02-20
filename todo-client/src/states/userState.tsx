import { atom } from "recoil";
import { UserContext } from "../types";

export const userState = atom<UserContext>({
  key: "userContext",
  default: {
    authUser: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")!)
      : {
          userId: "",
          firstName: "",
          picture: "",
          email: "",
        },
    isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")!) ?? false,
  },
});
