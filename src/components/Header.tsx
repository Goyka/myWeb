import { startTransition, useState } from "react";
import { GoZap } from "react-icons/go";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const token = sessionStorage.getItem("adminKey");

  const modalHandler = () => {
    startTransition(() => {
      setToggle(!toggle);
    });
  };

  return (
    <div className="flex px-9 py-6 cursor-pointer w-[100vw] justify-between">
      <div className="text-slate-800 flex">
        <Link className=" text-4xl" to={"/"}>
          <GoZap alt="logo" />
        </Link>
        <div onClick={() => modalHandler()}>
          <span className="text-orange-500 text-xs">❋</span>
        </div>
      </div>
      <div className="flex text-slate-800 mt-1 text-[17px] font-semibold gap-2">
        <div>
          <Link to={"/project"}>project</Link>
        </div>
        <div>
          <Link
            to={
              "https://goyaresume.notion.site/1978d2dfe61243bc877ab136d129af64?pvs=4"
            }
          >
            resume
          </Link>
        </div>
        {!token ? (
          <></>
        ) : (
          <div>
            <Link to={"/post"}>
              <span className="font-semibold text-xl">⚑</span>
            </Link>
          </div>
        )}
      </div>

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
