import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export const Container = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};
