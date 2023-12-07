import { getClassName } from "../../utils";
import { ButtonType } from "./index.type";
import "./buttons.scss";

const Button: React.FC<ButtonType> = ({
  children,
  className = "",
  varient = "primary",
  width = "full",
  textcase = "upper-case",
  active = false,
  loading = false,
  ...props
}) => {
  return (
    <button
      className={getClassName(
        "button",
        className,
        varient,
        active ? "active" : "",
        width,
        textcase
      )}
      {...props}
    >
      {loading ? "loading" : children}
    </button>
  );
};

export default Button;
