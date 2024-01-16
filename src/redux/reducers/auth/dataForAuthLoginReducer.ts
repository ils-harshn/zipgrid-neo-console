import { AuthLoginResType } from "../../../api/auth/response.types";
import AuthActionTypes from "../../actions/auth/index.types";

type StateType = AuthLoginResType | null;

function dataForAuthLoginReducer(
  state: StateType = null,
  action: AuthActionTypes
) {
  switch (action.type) {
    case "SET_DATA_FOR_AUTH_LOGIN":
      return action.data;
    default:
      return state;
  }
}

export default dataForAuthLoginReducer;
