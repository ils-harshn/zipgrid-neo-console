import { useMutation } from "react-query";
import { authLoginReq, authReloginReq } from "./queryFunctions";
import AUTH_QUERY_KEYS from "./queryKeys";
import { LoginPayloadType, ReloginPayloadType } from "./payload.types";

export const useAuthLoginMutation = (config = {}) =>
  useMutation({
    mutationFn: (payload: LoginPayloadType) =>
      authLoginReq(payload.email, payload.password),
    mutationKey: [AUTH_QUERY_KEYS.AUTH_LOGIN],
    ...config,
  });

export const useAuthReloginMutation = (config = {}) =>
  useMutation({
    mutationFn: (payload: ReloginPayloadType) =>
      authReloginReq(
        payload.society_id,
        payload.house_unique_id,
        payload.user_type
      ),
    mutationKey: [AUTH_QUERY_KEYS.AUTH_RELOGIN],
    ...config,
  });
