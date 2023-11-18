const Home = () => {
  return (
    <div className="h-[100vh] grid-2 flex justify-around">
      <div className="bg-slate-200 rounded-2xl rounded-l-none w-[20vw] mx-3 p-3 flex-col text-left text-sm font-semibold">
        <div className="gap-2">
          <li>about</li>
          <li>contact</li>
          <li>study</li>
          <li>project</li>
        </div>
      </div>
      <div className="bg-slate-200 rounded-2xl rounded-r-none w-[80vw] flex-col text-center mx-3 p-3">
        body
      </div>
    </div>
  );
};

export default Home;
