import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";

export const Container = ({ children, withOverflowHide }) => {
  return (
    <>
      <Head>
        <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/7545948.js"></script>
      </Head>
      <span className="isDesktop">
        <Navbar />
      </span>
      <span className="isMobile">
        <MobileNavbar />
      </span>

      <div style={{ overflow: withOverflowHide ? "hidden" : "" }}>{children}</div>
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
