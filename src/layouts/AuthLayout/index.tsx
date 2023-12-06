import { AuthLayoutType } from "./index.type";
import "./index.scss";

const AuthLayout: React.FC<AuthLayoutType> = ({ children }) => {
  return (
    <div id="auth-layout">
      <div className="two-column">
        <div className="one">

        </div>
        <div className="two">
          
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
