import { Link } from "react-router-dom";
import Timeline from "../components/Timeline";
import { useState } from "react";

const Proj = () => {
  const token = sessionStorage.getItem("adminKey");
  const [prop] = useState<string>("project");

  return (
    <div className="h-[100vh] grid-2 flex justify-around">
      <div className="bg-transparent text-slate-800 rounded-2xl rounded-l-none w-[9vw] mt-1 mx-2 p-7 flex-col text-left text-[19px] font-semibold max-tablet:text-[19px] max-tablet:w-[12vw] max-smalltab:w-[14vw] max-mobile:text-[13px] max-mobile:w-[14vw] max-mobile:p-1 max-smallphone:w-[14vw]">
        <div>
          <Link to={"/project"}>project</Link>
        </div>
        <div>
          <Link
            to={
              "https://www.notion.so/goyaresume/707d9a851a7f4666a1815e8ee0e016f5"
            }
          >
            resume
          </Link>
        </div>
        <Link to={"/study"}>study</Link>
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
      <div className="bg-slate-50 rounded-xl w-[88vw] h-[86vh] flex-col overflow-y-auto text-center p-3 mt-2 max-laptop:w-[88vw] max-tablet:w-[82vw] max-smalltab:w-[80vw] max-mobile:mr-2 max-mobile:w-[76vw] max-smallphone:h-[84vh]">
        <Timeline prop={prop} />
      </div>
    </div>
  );
};

export default Proj;
