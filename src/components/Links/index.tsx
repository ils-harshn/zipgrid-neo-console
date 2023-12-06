import { Link } from "react-router-dom";
import { AType } from "./links.type";
import { getClassName } from "../../utils";

const A: React.FC<AType> = ({
  children,
  className = "",
  size = "medium",
  varient = "primary",
  underline = "underline",
  ...props
}) => {
  return (
    <Link
      className={getClassName(className, size, varient, underline)}
      {...props}
    >
      {children}
    </Link>
  );
};

export default A;
