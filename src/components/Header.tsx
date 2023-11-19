import React, { useState } from "react";
import { GoZap, GoGlobe } from "react-icons/go";
import { useNavigate } from "react-router-dom";
const Modal = React.lazy(() => import("./Modal"));

const Header = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const modalHandler = () => {
    setToggle(!toggle);
  };

  return (
    <div className="flex px-9 py-3 max-mobile:p-3 justify-between items-center text-4xl">
      <span
        className="[100%] cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        <GoZap alt="logo" />
      </span>
      <span className="[100%] cursor-pointer" onClick={() => modalHandler()}>
        <GoGlobe alt="menu" />
      </span>
      {toggle === false ? (
        <></>
      ) : (
        <>
          <Modal modalHandler={modalHandler} />
        </>
      )}
    </div>
  );
};

export default Header;
