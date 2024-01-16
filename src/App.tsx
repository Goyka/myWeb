import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden">
      <div className=" w-[100vw] h-[10vh]">
        <Header />
      </div>
      <div className="h-[90vh]">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
