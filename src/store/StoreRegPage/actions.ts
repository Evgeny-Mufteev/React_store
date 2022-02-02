import { UserType } from "./types";

/* eslint-disable no-unused-vars */
export enum UsersActionsType {
  userRegistration = "USER_REGISTRATION",
  userLogout = "USER_LOGOUT",
}
// это action creater
export const userRegistrationAction = (user: UserType) => {
  const editUser = {
    lastName: user.lastName.toLocaleLowerCase(),
    firstName: user.firstName.toLocaleLowerCase(),
  };
  return {
    type: UsersActionsType.userRegistration,
    payload: editUser,
  };
};

// это action creater 2
export const userLogoutAction = () => {
  return {
    type: UsersActionsType.userLogout,
  };
};
