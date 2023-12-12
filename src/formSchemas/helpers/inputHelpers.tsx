import { FormikValues } from "formik";

export const handleTextChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  formik: FormikValues
) => {
  const { name, value } = e.target;
  formik.setFieldTouched(name, true); // Remember to mark the toched field first
  formik.setFieldValue(name, value);
};
