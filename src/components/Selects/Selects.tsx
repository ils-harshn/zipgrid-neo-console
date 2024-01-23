import React, { useEffect, useRef, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { OptionType, SelectType } from "./Selects.types";
import "./Selects.scss";
import { DownMenuSvg, UpMenuSvg } from "../../assets/svgs";

export const Select: React.FC<SelectType> = ({
  options,
  defaultSelected,
  placeholder,
  onSelect,
  canDeselect = false,
  className = "",
}) => {
  const [open, toggleOpen] = useState(false);
  const [selection, setSelection] = useState<OptionType | undefined>(
    defaultSelected
  );
  const [text, setText] = useState<string>("");
  const optionsElement = useRef<HTMLUListElement>(null);
  const parentElement = useRef<HTMLDivElement>(null);

  const filterArrayByText = (searchText: string): OptionType[] => {
    return (
      options?.filter((item) =>
        item.label?.toLowerCase().includes(searchText?.toLowerCase())
      ) || []
    );
  };

  const handleItemClick = (item: OptionType): void => {
    let newSelection: OptionType | undefined = item;
    if (isItemInSelection(newSelection) && canDeselect)
      newSelection = undefined;
    closeModal();
    setSelection(newSelection);
    onSelect(newSelection);
  };

  const isItemInSelection = (item: OptionType): boolean => {
    return selection ? selection.value === item.value : false;
  };

  const closeModal = () => {
    toggleOpen(false);
    setText("");
  };
  const openModal = () => toggleOpen(true);

  useEffect(() => {
    if (open && parentElement.current && optionsElement.current) {
      let pos = parentElement.current.getBoundingClientRect();
      optionsElement.current.style.width = `${
        parentElement.current.offsetWidth - 1.5 - 20
      }px`;
      let calculatedTop = pos.top + pos.height;
      if (
        calculatedTop + optionsElement.current.offsetHeight >
        document.body.offsetHeight
      ) {
        calculatedTop = pos.top - optionsElement.current.offsetHeight - 2;
      }
      optionsElement.current.style.top = `${calculatedTop}px`;
    }
  }, [open]);

  return (
    <div className={`Select-wrapper ${className}`} ref={parentElement}>
      <OutsideClickHandler onOutsideClick={closeModal}>
        <div
          className={`Select-input-container ${open ? "open" : ""}`}
          onClick={openModal}
        >
          <input
            className="Select-input"
            placeholder={selection ? selection.label : placeholder}
            value={text}
            onFocus={openModal}
            onChange={(e) => {
              openModal();
              setText(e.target.value);
            }}
          ></input>
          {open ? <UpMenuSvg /> : <DownMenuSvg />}
        </div>

        <ul ref={optionsElement} className={`${open ? "open" : "closed"}`}>
          {filterArrayByText(text)?.map((item, index) => (
            <li
              key={index}
              className={`${isItemInSelection(item) ? "selected" : ""}`}
            >
              <button type="button" onClick={() => handleItemClick(item)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </OutsideClickHandler>
    </div>
  );
};

export default Select;
