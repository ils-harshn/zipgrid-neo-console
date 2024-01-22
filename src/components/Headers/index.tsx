import { useState } from "react";
import { HeaderLogoSvg, SettingsSvg } from "../../assets/svgs";
import { getClassName } from "../../utils";
import { SettingsModal } from "../Modals/Modals";
import "./headers.scss";
import { HeaderType } from "./index.type";

const Header: React.FC<HeaderType> = ({ title }) => {
  const [isSettingsOpen, toggleSettingsOpenState] = useState(false);
  return (
    <header className={getClassName("header")}>
      <main>
        <div>
          <HeaderLogoSvg />
        </div>
        <div className="header-details">
          <div className="title" onClick={() => toggleSettingsOpenState(true)}>
            {title}
          </div>
          <div className="seprator"></div>
          <div
            className="settings"
            onClick={() => toggleSettingsOpenState(true)}
          >
            <SettingsSvg />
          </div>
        </div>
      </main>

      <SettingsModal
        isOpen={isSettingsOpen}
        onClickOutside={() => {
          toggleSettingsOpenState(false);
        }}
        onClickClose={() => {
          toggleSettingsOpenState(false);
        }}
      />
    </header>
  );
};

export default Header;
