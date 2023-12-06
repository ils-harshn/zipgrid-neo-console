import { getClassName } from "../../utils";
import "./inputs.scss";
import { TextInputType } from "./inputs.type";

const TextInput: React.FC<TextInputType> = ({
  varient = "primary",
  width = "full",
  ...props
}) => {
  return (
    <input
      className={getClassName("text-input", varient, width)}
      {...props}
    ></input>
  );
};

export { TextInput };
