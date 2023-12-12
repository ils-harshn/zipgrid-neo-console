import { Link } from "react-router-dom";
import { AType, AWithArrowType } from "./links.type";
import { getClassName } from "../../utils";
import "./index.scss";
import { ArrowSvg } from "../../assets/svgs";

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

export const AWithArrow: React.FC<AWithArrowType> = ({
  children,
  className = "",
  size = "medium",
  varient = "primary",
  underline = "underline-none",
  direction = "left",
  ...props
}) => {
  return (
    <Link
      className={getClassName(
        "link link-with-arrow",
        className,
        size,
        varient,
        underline,
        direction
      )}
      {...props}
    >
      <ArrowSvg className="link-arrow" />
      <span className="link-arrow-text">{children}</span>
    </Link>
  );
};

export default A;
