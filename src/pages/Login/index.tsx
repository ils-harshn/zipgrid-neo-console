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

const Login: React.FC = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnChange: true,
    onSubmit: (values) => {
      console.log({
        username: values.username,
        password: values.password,
      });
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
        className="login-email"
        type="text"
        placeholder="Username"
        width="initial"
        autoComplete="off"
        name="username"
        onChange={(e) => handleTextChange(e, formik)}
        value={formik.values.username}
      />
      <TextInput
        className="login-password"
        type="password"
        placeholder="Password"
        width="initial"
        name="password"
        onChange={(e) => handleTextChange(e, formik)}
        value={formik.values.password}
      />
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
