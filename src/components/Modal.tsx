import { Link } from "react-router-dom";

const Modal = ({ modalHandler }: any) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20">
      <div className="bg-slate-100 text-slate-800 rounded-2xl flex flex-col gap-1 justify-center items-start px-[30px] w-[300px] h-[180px]">
        <div className="flex justify-between w-[100%]">
          <div>
            <span className="text-[19px] font-semibold mr-1">Contact</span>
            <Link to={"/admin"}>
              <span className="text-slate-300 rounded-lg text-xs cursor-pointer">
                ❋
              </span>
            </Link>
          </div>
          <button
            className="text-slate-900 rounded-full text-sm cursor-pointer"
            onClick={() => modalHandler()}
          >
            ×
          </button>
        </div>
        <span className="text-sm">
          <a href="https://github.com/Goyka">⚙️ → github/Goyka</a>
        </span>
        <span className="text-sm">📩 → gim.goya@gmail.com</span>
        <span className="text-sm">📞 → +82 10 4331 2680</span>
      </div>
    </div>
  );
};
export default Modal;
