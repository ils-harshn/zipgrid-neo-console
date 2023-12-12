import Button from "../../components/Buttons";
import { CheckBoxInput, TextInput } from "../../components/Inputs";
import Label from "../../components/Labels";
import A from "../../components/Links";
import { AuthLayout } from "../../layouts";
import routes from "../../router/routes";
import "./login.scss";
import { useFormik } from "formik";
import validationSchema, { initialValues } from "../../formSchemas/loginSchema";
import { handleTextChange } from "../../formSchemas/helpers/inputHelpers";
import Error from "../../components/Errors";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnChange: true,
    onSubmit: (values) => {
      console.log({
        username: values.username,
        password: values.password,
        rememberMe: values.rememberMe,
      });
      navigate(routes.HOME);
    },
  });

  return (
    <AuthLayout
      formTitle="Login To"
      form={{
        onSubmit: formik.handleSubmit,
      }}
    >
      <TextInput
        className="login-input"
        type="text"
        placeholder="Username"
        width="initial"
        autoComplete="off"
        name="username"
        onChange={(e) => handleTextChange(e, formik)}
        value={formik.values.username}
      />
      <Error className="login-error">
        {formik.touched.username ? formik.errors.username : ""}
      </Error>
      <TextInput
        className="login-input"
        type="password"
        placeholder="Password"
        width="initial"
        name="password"
        onChange={(e) => handleTextChange(e, formik)}
        value={formik.values.password}
      />
      <Error className="login-error">
        {formik.touched.password ? formik.errors.password : ""}
      </Error>
      <div className="login-remember-me">
        <div className="login-remember-me-left">
          <CheckBoxInput
            name="rememberMe"
            onChange={formik.handleChange}
            checked={formik.values.rememberMe}
          />
          <Label>Remember Me</Label>
        </div>
        <div className="login-remember-me-right">
          <A to={routes.RESET_PASSWORD}>Forgot Password?</A>
        </div>
      </div>

      <Button type="submit" disabled={!formik.dirty || !formik.isValid}>
        Login
      </Button>
    </AuthLayout>
  );
};

export default Login;
