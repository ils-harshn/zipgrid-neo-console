import { HomeSvg } from "../../assets/svgs";
import { getClassName } from "../../utils";
import "./index.scss";
import { NavbarType, SubNavCallerType } from "./index.type";
import { NavbarData } from "./NavbarData";

const SubNavCaller: React.FC<SubNavCallerType> = ({
  data,
  className = "",
  replace = false,
}) => {
  
  const checkOverFlow = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const nestedMenu = e.currentTarget.getElementsByClassName(
      "recur-sub-nav-caller"
    )[0] as HTMLElement;
    if (nestedMenu) {
      const dropdownRect = nestedMenu.getBoundingClientRect();
      const viewportWidth = window.innerWidth;

      if (dropdownRect.right > viewportWidth) {
        nestedMenu.style.left = `unset`;
        nestedMenu.style.right = `100%`;
      }
    }
  };

  return data ? (
    <ul
      className={getClassName(
        replace ? className : "sub-nav-caller" + className
      )}
    >
      {data.map((item, index) => (
        <li
          className="sub-nav-caller-tiles"
          key={index}
          onMouseEnter={checkOverFlow}
        >
          {item.label}
          <hr />
          <SubNavCaller
            data={item.menuList}
            className="recur-sub-nav-caller"
            replace={true}
          />
        </li>
      ))}
    </ul>
  ) : null;
};

const Navbar: React.FC<NavbarType> = ({ className }) => {
  return (
    <nav className={getClassName(className, "nav-header")}>
      <ul className="nav-header-ul-main">
        <li className="nav-header-tiles">
          <HomeSvg />
          <span className="nav-header-sep"></span>
        </li>
        {NavbarData.map((item, index) => (
          <li key={index} className="nav-header-tiles">
            {item.label}
            <span className="nav-header-sep" />
            <SubNavCaller data={item.menuList} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
