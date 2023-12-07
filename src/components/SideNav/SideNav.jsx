import "./SideNav.css";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FiCompass, FiMapPin } from "react-icons/fi";
import { FaRegStar, FaRegUser, FaRegBell } from "react-icons/fa";
import { BsStopwatch } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { GrAppsRounded } from "react-icons/gr";
import { IoMdPower } from "react-icons/io";

const SideNav = () => {
  return (
    <div className="SideNav">
      <ul className="nav-links">
        <li>
          <TiSocialGooglePlus />
        </li>
        <li>
          <FaRegUser />
        </li>
        <li>
          <FaRegBell />
        </li>
        <li>
          <GrAppsRounded />
        </li>
        <li>
          <FiCompass />
        </li>
        <li>
          <FiMapPin />
        </li>
        <li>
          <FaRegStar />
        </li>
        <li>
          <BsStopwatch />
        </li>
        <li>
          <IoSettingsOutline />
        </li>
      </ul>
    
       <span className="power-btn"> <IoMdPower /></span>
      
    </div>
  );
};

export default SideNav;
