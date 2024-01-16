import { Navigate, Outlet, useNavigate } from "react-router-dom";
import webTokenStorer from "../../webStorer";
import { useAuthReloginMutation } from "../../api/auth/queryHooks";
import { useEffect, useState } from "react";
import routes from "../routes";
import { FullScreenLoader } from "../../components/Loaders";
import { useDispatch } from "react-redux";
import AuthActionTypes from "../../redux/actions/auth/index.types";
import { AuthReloginResType } from "../../api/auth/response.types";

export const ProtectedRoute = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = webTokenStorer.getToken();
  const [isLoading, setIsLoading] = useState(true);

  const { mutate, isError } = useAuthReloginMutation({
    onSuccess: (data: AuthReloginResType) => {
      dispatch({
        type: "SET_DATA_FOR_AUTH_LOGIN",
        data: data,
      } as AuthActionTypes);
      setIsLoading(false);
    },
    onError: () => {
      webTokenStorer.removeToken();
      navigate(routes.LOGIN);
    },
  });

  useEffect(() => {
    if (
      !data?.house_unique_id &&
      !data?.society_id &&
      !data?.user_role &&
      !data?.access_token
    ) {
      navigate(routes.LOGIN);
    } else {
      mutate({
        society_id: data.society_id,
        house_unique_id: data.house_unique_id,
        user_type: data.user_role,
      });
    }
  }, [
    data?.house_unique_id,
    data?.society_id,
    data?.user_role,
    data?.access_token,
    mutate,
    navigate,
  ]);

  if (isLoading) return <FullScreenLoader />;
  else if (isError) return <Navigate to={routes.LOGIN} />;
  return <Outlet />;
};
