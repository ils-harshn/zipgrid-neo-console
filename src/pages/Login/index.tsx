import { TextInput } from "../../components/Inputs";
import { AuthLayout } from "../../layouts";

const Login: React.FC = () => {
  return (
    <AuthLayout formTitle="Login To">
      <TextInput  placeholder="Email Address"/>
      <TextInput />
    </AuthLayout>
  );
};

export default Login;
