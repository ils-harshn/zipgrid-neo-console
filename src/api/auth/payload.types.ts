export type LoginPayloadType = {
  email: string;
  password: string;
};

export type ReloginPayloadType = {
  society_id: string;
  house_unique_id: string;
  user_type: string;
};
