export type OptionType = {
  value: any;
  label: string;
};

export type SelectType = {
  options: OptionType[];
  defaultSelected?: OptionType;
  placeholder: string;
  canDeselect?: boolean;
  onSelect: (selected: OptionType | undefined) => void;
  className?: string;
};
