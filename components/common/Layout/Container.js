import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";

export const Container = ({ children }) => {
  return (
    <>
      <span className="isDesktop">
        <Navbar />
      </span>
      <span className="isMobile">
        <MobileNavbar />
      </span>

      <div className="child">{children}</div>
      <Footer />

      <style jsx>{`
        .isDesktop {
          display: block;
        }

        .isMobile {
          display: none;
        }

        .child {
          overflow: hidden;
        }

        @media screen and (max-width: 1380px) {
          .isDesktop {
            display: none;
          }

          .isMobile {
            display: block;
          }
        }
      `}</style>
    </>
  );
};
