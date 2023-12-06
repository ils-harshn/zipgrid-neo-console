import { AuthLayoutType } from "./index.type";
import "./index.scss";
import { LogoSvg } from "../../assets/svgs";

const AuthLayout: React.FC<AuthLayoutType> = ({ children, formTitle }) => {
  return (
    <div id="auth-layout">
      <div className="auth-two-column">
        <div className="auth-one">
          <div className="auth-logo">
            <LogoSvg />
          </div>
          <div className="auth-header-1">Simplify Your Society Management</div>
          <div className="auth-header-2">
            With services designed for your society
          </div>
        </div>
        <div className="auth-two">
          <form action="#">
            <div className="auth-form-title">{formTitle}</div>
            <div className="auth-form-company-name">Zipgrid Neo Console</div>
            <hr className="auth-form-seperator" />

            <div className="auth-group-inputs"></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
