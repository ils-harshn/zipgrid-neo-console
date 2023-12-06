type Input = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">;

type TextInputType = Input & {
  type: "text" | "password";
  varient?: "primary";
  width?: "initial" | "full";
};

type CheckBoxInputType = Input & {
  varient?: "primary";
};

export type { TextInputType, CheckBoxInputType };
