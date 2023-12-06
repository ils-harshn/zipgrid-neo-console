import { getClassName } from "../../utils";
import { LabelType } from "./labels.type";
import "./index.scss";

const Label: React.FC<LabelType> = ({
  varient = "primary",
  children,
  className = "",
}) => {
  return (
    <label className={getClassName("label", varient, className)}>
      {children}
    </label>
  );
};

export default Label;
