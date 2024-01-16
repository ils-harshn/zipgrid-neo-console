import { AuthLoginResType } from "../../../api/auth/response.types";

type SET_DATA_FOR_AUTH_LOGIN = {
  type: "SET_DATA_FOR_AUTH_LOGIN";
  data: AuthLoginResType;
};

type AuthActionTypes = SET_DATA_FOR_AUTH_LOGIN;

export default AuthActionTypes;
