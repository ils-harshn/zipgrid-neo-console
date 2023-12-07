import Button from "../../components/Buttons";
import { TextInput } from "../../components/Inputs";
import A from "../../components/Links";
import { AuthLayout } from "../../layouts";
import routes from "../../router/routes";
import "./resetpassword.scss"

const ResetPassword: React.FC = () => {
  return (
    <AuthLayout formTitle="Reset Password For">
      <TextInput
        className="login-email"
        type="text"
        placeholder="Email Address"
        width="initial"
      />

      <Button type="submit">Send Reset Link</Button>
      <div className="resetpassword-back-to-login">
        <A to={routes.LOGIN}>Back to Login</A>
      </div>
    </AuthLayout>
  );
};

export default ResetPassword;
