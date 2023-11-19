import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("adminKey");
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);
  return (
    <div className="bg-slate-50 rounded-xl w-[98vw] h-[87vh] flex-col mx-2 p-5 mt-2 max-tablet:w-[96vw] max-mobile:mr-2 max-mobile:w-[92vw]">
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="flex items-center gap-2 mb-2">
          <button className="bg-slate-200 text-slate-800 font-medium w-[65px] h-[35px] mt-2 rounded-full">
            project
          </button>
          <button className="bg-slate-200 text-slate-800 font-medium w-[65px] h-[35px] mt-2 rounded-full">
            study
          </button>
        </div>
        <input
          type="text"
          id="title"
          placeholder=" title"
          className="w-[80vw] h-[35px] border-2 rounded-md font-medium"
        />
        <div className="flex w-[80vw] h-[40px] gap-2 text-xl items-center px-1">
          <span className="bg-slate-200 w-[33px] h-[33px] rounded-xl text-center items-center">
            🔗
          </span>
          <span className="bg-slate-200 w-[33px] h-[33px] rounded-xl text-center items-center">
            📷
          </span>
        </div>
        <textarea
          name="content"
          id="content"
          placeholder=" content"
          className="w-[80vw] h-[60vh] border-2 rounded-md font-medium"
        />
        <button className="bg-slate-800 text-slate-50 font-semibold w-[95px] h-[35px] mt-2 rounded-lg">
          post
        </button>
      </div>
    </div>
  );
};

export default AddPost;
