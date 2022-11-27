import React from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Featured from "../components/Featured";
import TopBar from "../components/TopBar";

const page = () => {
  return <div>
    <TopBar />
    <Banner />
    <Categories />
    <Featured />
  </div>;
};

export default page;
