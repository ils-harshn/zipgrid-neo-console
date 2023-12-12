import * as Yup from "yup";
import { PASSWORD_REG, USERNAME_REG } from "./REGEX";

const validationSchema = Yup.object({
  username: Yup.string()
    .required("Username is required")
    .matches(
      USERNAME_REG,
      "Username must contain only letters, numbers, hyphens, and underscores"
    ),
  password: Yup.string()
    .required("Password is required")
    .matches(
      PASSWORD_REG,
      "Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number, and at least one special character from (@$!%*?&#)"
    ),
  rememberMe: Yup.boolean(),
});

export const initialValues = {
  username: "",
  password: "",
  rememberMe: false,
};

export default validationSchema;
