export type NavbarType = {
  className: string;
};

export type NavbarDataType = {
  label: string;
  link?: string;
  menuList?: NavbarDataType[];
};

export type SubNavCallerType = {
  data: NavbarDataType[] | undefined;
  className?: string;
  replace?: boolean;
};
