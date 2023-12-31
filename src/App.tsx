import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex-col w-[100vw] h-[100vh] items-center justify-center fixed">
      <div className="h-[7vh] w-[100%] my-2 px-3 relative z-10">
        <Header />
      </div>
      <div className="h-[40vh] px-2 fixed">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
