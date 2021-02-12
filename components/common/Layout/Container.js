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

      <div>{children}</div>
      <Footer />

      <style jsx>{`
        .isDesktop {
          display: block;
        }

        .isMobile {
          display: none;
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
