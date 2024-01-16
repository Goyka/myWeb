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
    <div className="flex px-10 py-4 mt-1 cursor-pointer w-[100vw] justify-between">
      <div className="text-slate-800 flex">
        <Link className="text-4xl" to={"/"}>
          <GoZap alt="logo" />
        </Link>
        <div onClick={() => modalHandler()}>
          <span className="text-orange-500 text-xs hover:animate-ping">❋</span>
        </div>
      </div>
      <div className="flex text-slate-800 mt-1 text-[15px] font-medium gap-4">
        <div>
          <Link to={"/project"}>Projects</Link>
        </div>
        <div>
          <Link
            to={
              "https://goyaresume.notion.site/1978d2dfe61243bc877ab136d129af64?pvs=4"
            }
          >
            Résumé
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
