export type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string;
  varient?: "primary" | "secondary" | "blue";
  width?: "full" | "fit";
  textcase?: "upper-case" | "lower-case" | "capitalize" | "none-text-case";
  loading?: boolean;
  active?: boolean;
};
