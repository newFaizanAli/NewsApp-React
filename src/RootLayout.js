import React from "react";
import { Outlet } from "react-router-dom";
import CategoryComp from "./Components/CategoryComp";

const RootLayout = () => {
  return (
    <div>
      <div className="p-3">
        <h1 className="text-2xl logo text-center">newsCenter</h1>
      </div>
      <CategoryComp />
      <Outlet />
    </div>
  );
};

export default RootLayout;
