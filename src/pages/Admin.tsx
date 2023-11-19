import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [adminCode, setAdminCode] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const adminKey = "n6QFVfs74YDiUrW38Fzb";

  useEffect(() => {
    const token = sessionStorage.getItem("adminKey");
    if (token) {
      navigate("/");
    }
  }, []);

  const loginHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (adminCode === "goyka" && password === "220605") {
      sessionStorage.setItem("adminKey", adminKey);
    } else {
      alert("잘못 된 접근입니다. 메인 페이지로 안내합니다.");
      navigate("/");
    }
    setAdminCode("");
    setPassword("");
    navigate("/");
  };
  return (
    <div className="flex flex-col justify-center items-center w-[96vw] h-[77vh] gap-1.5 text-sm font-semibold">
      <label htmlFor="id">관리자 코드</label>
      <input
        type="text"
        className="w-[215px] h-[35px] border-2 rounded-md font-medium"
        value={adminCode}
        onChange={(e) => setAdminCode(e.target.value)}
        id="id"
        placeholder=" admin code"
      />
      <label htmlFor="password">비밀번호</label>
      <input
        type="password"
        className="w-[215px] h-[35px] border-2 rounded-md font-medium"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="password"
        placeholder=" password"
      />
      <button
        onClick={loginHandler}
        className="bg-slate-800 text-slate-50 font-semibold w-[95px] h-[35px] mt-2 rounded-lg"
      >
        admin
      </button>
    </div>
  );
};

export default Admin;
