import { Link } from "react-router-dom";

const Modal = ({ modalHandler }: any) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20">
      <div className="bg-white text-gray-800 rounded-lg flex flex-col gap-1 items-center px-[20px] w-[345px] h-[235px] font-semibold">
        <Link to={"/admin"}>
          <span className="text-gray-500 rounded-lg text-xs cursor-pointer">
            ❋
          </span>
        </Link>
        <span className="text-[19px] font-semibold -mt-2 mb-2">infomation</span>
        <span className="text-sm">📩 → gim.goya@gmail.com</span>
        <span className="text-sm">📞 → +82 1043312680</span>
        <span className="text-sm">
          <a href="https://github.com/Goyka">⚙️ → github</a>
        </span>
        <button
          className="bg-slate-500 w-[63px] h-[31px] text-white rounded-lg px-1 text-sm mt-3 cursor-pointer"
          onClick={() => modalHandler()}
        >
          close
        </button>
      </div>
    </div>
  );
};
export default Modal;
