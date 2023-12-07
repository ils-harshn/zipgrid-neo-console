import { CheckBoxInput, TextInput } from "../../components/Inputs";
import Label from "../../components/Labels";
import A from "../../components/Links";
import { AuthLayout } from "../../layouts";
import "./login.scss";

const Login: React.FC = () => {
  return (
    <AuthLayout formTitle="Login To">
      <TextInput
        className="login-email"
        type="text"
        placeholder="Email Address"
        width="initial"
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
          <A to="">Forgot Password</A>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
