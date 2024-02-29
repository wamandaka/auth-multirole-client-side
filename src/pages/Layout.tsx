import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }: any) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="">
        <Sidebar />
      </div>
      <div className="md:ml-64 md:pt-20 md:pl-2 bg-slate-300 h-screen">
        <main>{children}</main>
      </div>
    </React.Fragment>
  );
};

export default Layout;
