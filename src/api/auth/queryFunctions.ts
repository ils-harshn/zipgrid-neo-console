import API_ENDPOINTS from "../endpoints";
import api from "../instances";

export const authLoginReq = async (email: string, password: string) => {
  const response = await api.post(API_ENDPOINTS.LOGIN(), {
    email: email,
    password: password,
    ip: "ip",
    device_type: "device_type",
    os_version: "os_version",
    app_version: "app_version",
    phone_imei: "phone_imei",
    phone_brand: "phone_brand",
  });
  return response.data;
};

export const authReloginReq = async (
  society_id: string,
  house_unique_id: string,
  user_type: string
) => {
  const response = await api.post(API_ENDPOINTS.RELOGIN(), {
    community_id: society_id,
    house_unique_id: house_unique_id,
    user_type: user_type,
    ip: "ip",
  });
  return response.data;
};