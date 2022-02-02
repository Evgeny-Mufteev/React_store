import { ActionsType, ReducerType } from "./types";
import { UsersActionsType } from "./actions";

const initialState: ReducerType = {
  user: { lastName: "", firstName: "" },
};

const reducer = (state = initialState, action: ActionsType): ReducerType => {
  switch (action.type) {
    case UsersActionsType.userRegistration:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
