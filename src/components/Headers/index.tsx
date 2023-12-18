import { HeaderLogoSvg, SettingsSvg } from "../../assets/svgs";
import { getClassName } from "../../utils";
import "./headers.scss";
import { HeaderType } from "./index.type";

const Header: React.FC<HeaderType> = ({ title }) => {
  return (
    <header className={getClassName("header")}>
      <main>
        <div>
          <HeaderLogoSvg />
        </div>
        <div className="header-details">
          <div className="title">{title}</div>
          <div className="seprator"></div>
          <div className="settings">
            <SettingsSvg />
          </div>
        </div>
      </main>
    </header>
  );
};

export default Header;
