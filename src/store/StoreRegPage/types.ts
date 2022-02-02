/* eslint-disable no-redeclare */
import { UsersActionsType } from "./actions";

export type ReducerType = {
  user: UserType;
};

export type UserType = {
  lastName: string;
  firstName: string;
};

type userRegistrationActionType = {
  type: UsersActionsType.userRegistration;
  payload: UserType;
};

type userLogoutAction = {
  type: UsersActionsType.userLogout;
};

export type ActionsType = userRegistrationActionType | userLogoutAction;
