// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="appLayout">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default App;
