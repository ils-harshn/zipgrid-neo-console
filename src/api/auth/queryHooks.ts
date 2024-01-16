import { useMutation } from "react-query";
import { authLoginReq } from "./queryFunctions";
import AUTH_QUERY_KEYS from "./queryKeys";
import { LoginPayloadType } from "./payload.types";

export const useAuthLoginMutation = (config = {}) =>
  useMutation({
    mutationFn: (payload: LoginPayloadType) =>
      authLoginReq(payload.email, payload.password),
    mutationKey: [AUTH_QUERY_KEYS.AUTH_LOGIN],
    ...config,
  });
