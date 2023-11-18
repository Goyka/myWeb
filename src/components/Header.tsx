import { GoZap, GoGlobe } from "react-icons/go";

const Header = () => {
  return (
    <div className="bg-white flex p-3 justify-between items-center text-3xl">
      <span className="[100%]"><GoZap/></span>
      <span className="[100%]"><GoGlobe/></span>
    </div>
  );
};

export default Header;
