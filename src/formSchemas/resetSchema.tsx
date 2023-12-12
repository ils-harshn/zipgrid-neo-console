import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
});

export const initialValues = {
  email: "",
};

export default validationSchema;
