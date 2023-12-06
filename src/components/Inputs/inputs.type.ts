type Input = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">;

type TextInputType = Input & {
  varient?: "primary";
  width?: "initial" | "full";
};

export type { TextInputType };
