import Timeline from "../components/Timeline";
import { useState } from "react";

const Home = () => {
  const [prop] = useState<string>("home");
  return (
    <>
      <div className="w-[100vw] h-[86vh] flex-col overflow-y-auto scrollbar-hide text-center p-3 mt-2">
        <Timeline prop={prop} />
      </div>
    </>
  );
};

export default Home;
