import React from "react";
import LeftSideBar from "./left-side/LeftSideBar";
import RightSideBar from "./right-side/RightSideBar";

const Home = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 px-8 h-screen border-r-2">
        <LeftSideBar></LeftSideBar>
      </div>
      <div className="col-span-9 px-8">
        <RightSideBar></RightSideBar>
      </div>
    </div>
  );
};

export default Home;
