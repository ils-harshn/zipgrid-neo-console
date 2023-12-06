import { CheckboxSvg } from "../../assets/svgs";
import { getClassName } from "../../utils";
import "./inputs.scss";
import { CheckBoxInputType, TextInputType } from "./inputs.type";

const TextInput: React.FC<TextInputType> = ({
  varient = "primary",
  width = "full",
  className = "",
  ...props
}) => {
  return (
    <input
      className={getClassName("text-input", varient, width, className)}
      {...props}
    ></input>
  );
};

const CheckBoxInput: React.FC<CheckBoxInputType> = ({
  varient = "primary",
  className = "",
  ...props
}) => {
  return (
    <div className="checkbox-input-box">
      <input
        type="checkbox"
        className={getClassName("checkbox-input", varient, className)}
        {...props}
      ></input>
      <CheckboxSvg />
    </div>
  );
};

export { TextInput, CheckBoxInput };
