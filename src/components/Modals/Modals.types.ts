export type ModalWrapperType = {
  isOpen: boolean;
  className?: string;
  children: React.ReactNode;
  onClickOutside: () => void;
};

export type SettingsModalType = {
  isOpen: boolean;
  onClickOutside: () => void;
  onClickClose: () => void;
};

export type ModalHeaderType = {
  title: string;
  onClickClose: () => void;
};
