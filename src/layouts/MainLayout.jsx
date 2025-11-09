import React from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      <main className="min-h-[calc(100vh-132px)] py-8">
        <Outlet></Outlet>
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
