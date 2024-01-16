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
import { useAuthLoginMutation } from "../../api/auth/queryHooks";
import { AuthLoginResType } from "../../api/auth/response.types";
import webTokenStorer from "../../webStorer";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const { mutate, isLoading } = useAuthLoginMutation({
    onSuccess: (data: AuthLoginResType) => {
      webTokenStorer.saveToken(
        data.access_token,
        data.default_community.community_id,
        data.default_community.blocks?.[0].houseUniqueId || 0,
        data.user_role,
        formik.values.rememberMe
      );
      navigate(routes.HOME);
    },
    onError: () => {
      formik.setErrors({ email: "User not found!" });
    },
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnChange: true,
    onSubmit: (values) => {
      mutate({ ...values });
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
        placeholder="Email"
        width="initial"
        autoComplete="off"
        name="email"
        onChange={(e) => handleTextChange(e, formik)}
        value={formik.values.email}
      />
      <Error className="login-error">
        {formik.touched.email ? formik.errors.email : ""}
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

      <Button
        type="submit"
        disabled={!formik.dirty || !formik.isValid || isLoading}
      >
        {isLoading ? "Please wait..." : "Login"}
      </Button>
    </AuthLayout>
  );
};

export default Login;
