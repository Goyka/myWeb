import { addDoc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../Firebase";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("home");
  const navigate = useNavigate();
  const token = sessionStorage.getItem("adminKey");

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

  const categoriesHandler = (e: any) => {
    e.preventDefault();
    if (e.target.value === "project") {
      setCategory("project");
    } else if (e.target.value === "study") {
      setCategory("study");
    } else {
      setCategory("home");
    }
  };

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    if (title === "" && content === "") {
      return;
    }
    try {
      if (category === "home") {
        await addDoc(collection(db, "home"), {
          title,
          content,
          createdAt: Date.now(),
        });
        navigate("/");
      } else if (category === "project") {
        await addDoc(collection(db, "project"), {
          title,
          content,
          createdAt: Date.now(),
        });
        navigate("/project");
      } else {
        await addDoc(collection(db, "study"), {
          title,
          content,
          createdAt: Date.now(),
        });
        navigate("/study");
      }
    } catch (error) {
      console.error(error);
    }
    setTitle("");
    setContent("");
  };

  return (
    <div className="bg-slate-50 rounded-xl w-[98vw] h-[87vh] flex-col mx-2 p-5 mt-2 max-tablet:w-[96vw] max-mobile:mr-2 max-mobile:w-[92vw]">
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="flex items-center gap-2 mb-2">
          {category === "home" && (
            <>
              <button
                value={"project"}
                onClick={(e) => categoriesHandler(e)}
                className="bg-slate-200 text-slate-800 font-medium w-[65px] h-[35px] mt-2 rounded-full"
              >
                project
              </button>
              <button
                value={"study"}
                onClick={(e) => categoriesHandler(e)}
                className="bg-slate-200 text-slate-800 font-medium w-[65px] h-[35px] mt-2 rounded-full"
              >
                study
              </button>
            </>
          )}
          {category === "project" && (
            <>
              <button
                value={"project"}
                onClick={(e) => categoriesHandler(e)}
                className="bg-slate-800 text-slate-100 font-medium w-[65px] h-[35px] mt-2 rounded-full"
              >
                project
              </button>
              <button
                value={"study"}
                onClick={(e) => categoriesHandler(e)}
                className="bg-slate-200 text-slate-800 font-medium w-[65px] h-[35px] mt-2 rounded-full"
              >
                study
              </button>
            </>
          )}
          {category === "study" && (
            <>
              <button
                value={"project"}
                onClick={(e) => categoriesHandler(e)}
                className="bg-slate-200 text-slate-800 font-medium w-[65px] h-[35px] mt-2 rounded-full"
              >
                project
              </button>
              <button
                value={"study"}
                onClick={(e) => categoriesHandler(e)}
                className="bg-slate-800 text-slate-100 font-medium w-[65px] h-[35px] mt-2 rounded-full"
              >
                study
              </button>
            </>
          )}
        </div>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder=" title"
          className="w-[80vw] h-[35px] border-2 rounded-md font-medium"
        />
        <div className="flex w-[80vw] h-[40px] gap-2 text-xl items-center px-1">
          <input id="file" type="file" accept="image/*" className="hidden" />
          <label
            htmlFor="file"
            className="bg-slate-200 w-[33px] h-[33px] rounded-xl text-center items-center cursor-pointer"
          >
            📷
          </label>
          <span className="bg-slate-200 w-[33px] h-[33px] rounded-xl text-center items-center">
            🔗
          </span>
        </div>
        <textarea
          name="content"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder=" content"
          className="w-[80vw] h-[60vh] border-2 rounded-md font-medium"
        />
        <button
          onClick={onSubmitHandler}
          className="bg-slate-800 text-slate-50 font-semibold w-[95px] h-[35px] mt-2 rounded-lg"
        >
          post
        </button>
      </div>
    </div>
  );
};

export default AddPost;
