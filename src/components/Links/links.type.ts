import { LinkProps } from "react-router-dom";

type AType = LinkProps & {
  children?: string;
  size?: "small" | "medium" | "large";
  varient?: "primary" | "secondary";
  underline?: "underline-none" | "underline";
};

export type { AType };
