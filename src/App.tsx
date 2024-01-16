import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden fixed">
      <div className=" w-[100vw] h-[8vh] animate-fadeIn">
        <Header />
      </div>
      <div className="h-[90vh] animate-fadeIn">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
