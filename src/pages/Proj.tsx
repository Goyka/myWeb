import { Link } from "react-router-dom";

const Proj = () => {
  return (
    <div className="h-[100vh] grid-2 flex justify-around">
      <div className="bg-slate-200 text-slate-800 rounded-2xl rounded-l-none w-[20vw] mx-2 p-7 flex-col text-left text-[19px] font-semibold max-tablet:text-[19px] max-tablet:w-[20vw] max-mobile:text-[13px] max-mobile:w-[31vw]">
        <div className="gap-2">
          <Link to={"/project"}>
            <li>project</li>
          </Link>
          <li>resume</li>
          <Link to={"/study"}>
            <li>study</li>
          </Link>
        </div>
      </div>
      <div className="bg-slate-200 rounded-2xl rounded-r-none w-[80vw] flex-col text-center mx-2 p-5">
        Project
      </div>
    </div>
  );
};

export default Proj;
