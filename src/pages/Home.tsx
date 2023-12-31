import { Link } from "react-router-dom";
import Timeline from "../components/Timeline";
import { useState } from "react";

const Home = () => {
  const token = sessionStorage.getItem("adminKey");
  const [prop] = useState<string>("home");
  return (
    <div className="h-[100vh] grid-2 flex justify-around">
      <div className="bg-transparent text-slate-800 rounded-2xl rounded-l-none w-[9vw] mt-1 mx-2 p-7 flex-col text-left text-[19px] font-semibold max-tablet:text-[1em] max-tablet:w-[12vw] max-smalltab:w-[14vw] max-mobile:text-[0.7em] max-mobile:w-[14vw] max-mobile:p-1 max-smallphone:w-[14vw]">
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
      <div className="bg-slate-50 rounded-xl w-[88vw] h-[86vh] flex-col overflow-y-auto scrollbar-hide text-center p-3 mt-2 max-laptop:w-[88vw] max-tablet:w-[82vw] max-smalltab:w-[80vw] max-mobile:mr-2 max-mobile:w-[76vw] max-smallphone:h-[84vh]">
        <img
          src="/profile.webp"
          alt="profile"
          className="w-[100px] ml-8 mt-3 mb-2 max-mobile:ml-6"
        />
        <Timeline prop={prop} />
      </div>
    </div>
  );
};

export default Home;
