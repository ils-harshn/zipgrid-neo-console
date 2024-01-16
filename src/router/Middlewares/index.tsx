import { Navigate, Outlet, useNavigate } from "react-router-dom";
import webTokenStorer from "../../webStorer";
import { useAuthReloginMutation } from "../../api/auth/queryHooks";
import { useEffect, useState } from "react";
import routes from "../routes";
import { FullScreenLoader } from "../../components/Loaders";

export const ProtectedRoute = () => {
  const navigate = useNavigate();
  const data = webTokenStorer.getToken();
  const [isLoading, setIsLoading] = useState(true);

  const { mutate, isError } = useAuthReloginMutation({
    onSuccess: () => {
      setIsLoading(false);
    },
    onError: () => {
      webTokenStorer.removeToken();
      navigate(routes.LOGIN);
    },
  });

  useEffect(() => {
    mutate({
      society_id: data.society_id,
      house_unique_id: data.house_unique_id,
      user_type: data.user_role,
    });
  }, [data.house_unique_id, data.society_id, data.user_role, mutate]);

  if (
    !data.house_unique_id &&
    !data.society_id &&
    !data.user_role &&
    !data.access_token
  )
    return <Navigate to={routes.LOGIN} />;

  if (isLoading) return <FullScreenLoader />;
  else if (isError) return <Navigate to={routes.LOGIN} />;
  return <Outlet />;
};
