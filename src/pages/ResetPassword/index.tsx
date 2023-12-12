import { useFormik } from "formik";
import Button from "../../components/Buttons";
import { TextInput } from "../../components/Inputs";
import { AWithArrow } from "../../components/Links";
import validationSchema, { initialValues } from "../../formSchemas/resetSchema";
import { AuthLayout } from "../../layouts";
import routes from "../../router/routes";
import "./resetpassword.scss";
import { handleTextChange } from "../../formSchemas/helpers/inputHelpers";
import Error from "../../components/Errors";
import { useNavigate } from "react-router-dom";

const ResetPassword: React.FC = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnChange: true,
    onSubmit: (values) => {
      console.log({
        email: values.email,
      });
      navigate(routes.LOGIN);
    },
  });

  return (
    <AuthLayout
      formTitle="Reset Password For"
      form={{
        onSubmit: formik.handleSubmit,
      }}
    >
      <TextInput
        className="resetpass-input"
        type="text"
        name="email"
        placeholder="Email Address"
        width="initial"
        onChange={(e) => handleTextChange(e, formik)}
      />
      <Error className="resetpass-error">
        {formik.touched.email ? formik.errors.email : ""}
      </Error>

      <Button type="submit" disabled={!formik.dirty || !formik.isValid}>
        Send Reset Link
      </Button>
      <div className="resetpassword-back-to-login">
        <AWithArrow to={routes.LOGIN} direction="left">
          Back to Login
        </AWithArrow>
      </div>
    </AuthLayout>
  );
};

export default ResetPassword;
