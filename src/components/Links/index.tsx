import { Link } from "react-router-dom";
import { AType } from "./links.type";
import { getClassName } from "../../utils";
import "./index.scss";

const A: React.FC<AType> = ({
  children,
  className = "",
  size = "medium",
  varient = "primary",
  underline = "underline-none",
  ...props
}) => {
  return (
    <Link
      className={getClassName("link", className, size, varient, underline)}
      {...props}
    >
      {children}
    </Link>
  );
};

export default A;
