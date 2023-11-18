const Modal = ({ modalHandler }: any) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20">
      <div className="bg-white text-gray-800 rounded-lg flex flex-col gap-1 justify-center items-center p-[20px] w-[300px] h-[200px] font-semibold">
        <span className="text-[19px] font-semibold">infomation.</span>
        <span className="text-sm">📩 → gim.goya@gmail.com</span>
        <span className="text-sm">📞 → +82 1043312680</span>
        <span className="text-sm">
          <a href="https://github.com/Goyka">⚙️ → github</a>
        </span>
        <button
          className="bg-slate-500 w-[63px] h-[31px] text-white rounded-lg px-1 text-sm mt-3"
          onClick={() => modalHandler()}
        >
          close
        </button>
      </div>
    </div>
  );
};
export default Modal;
