import { getClassName } from "../../utils";
import ErrorType from "./Errors.type";
import "./index.scss";

const Error: React.FC<ErrorType> = ({
  children,
  className = "",
  varient = "primary",
  ...props
}) => {
  return (
    <div className={getClassName("error", varient, className)} {...props}>
      {children}
    </div>
  );
};

export default Error;
