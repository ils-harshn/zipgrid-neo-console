import * as Yup from "yup";
import { EMAIL_REGEX } from "./REGEX";

const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .matches(EMAIL_REGEX, "Invalid email address"),
  password: Yup.string().required("Password is required"),
  rememberMe: Yup.boolean(),
});

export const initialValues = {
  email: "",
  password: "",
  rememberMe: false,
};

export default validationSchema;
