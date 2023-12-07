import Button from "../../components/Buttons";
import { CheckBoxInput, TextInput } from "../../components/Inputs";
import Label from "../../components/Labels";
import A from "../../components/Links";
import { AuthLayout } from "../../layouts";
import routes from "../../router/routes";
import "./login.scss";

const Login: React.FC = () => {
  return (
    <AuthLayout
      formTitle="Login To"
      form={{
        action: "#",
      }}
    >
      <TextInput
        className="login-email"
        type="text"
        placeholder="Username"
        width="initial"
        autoComplete="off"
      />
      <TextInput
        className="login-password"
        type="password"
        placeholder="Password"
        width="initial"
      />
      <div className="login-remember-me">
        <div className="login-remember-me-left">
          <CheckBoxInput />
          <Label>Remember Me</Label>
        </div>
        <div className="login-remember-me-right">
          <A to={routes.RESET_PASSWORD}>Forgot Password</A>
        </div>
      </div>

      <Button type="submit">Login</Button>
    </AuthLayout>
  );
};

export default Login;
