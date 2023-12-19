import { HomeSvg } from "../../assets/svgs";
import { getClassName } from "../../utils";
import "./index.scss";
import { NavbarType } from "./index.type";

const Navbar: React.FC<NavbarType> = ({ className }) => {
  return (
    <nav className={getClassName(className, "nav-header")}>
      <ul>
        <li>
          <HomeSvg />
        </li>
        <li>Setup & Records</li>
        <li>Social & Communications</li>
        <li>Finance</li>
        <li>Compliance</li>
        <li>Desk</li>
        <li>Club</li>
        <li>Gate Management</li>
        <li>Reports</li>
        <li>Chats</li>
      </ul>
    </nav>
  );
};

export default Navbar;
