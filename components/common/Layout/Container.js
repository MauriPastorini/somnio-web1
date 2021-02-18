import React from "react";
import Footer from "./Footer";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";

export const Container = ({ children }) => {
  return (
    <div className="main-content">
      <div className="building-message">
        <div className="relative-content">
          <nav className="nav">
            <img className="logo" src="/assets/images/common/logo.png" />
          </nav>
          <img className="bg" src="/assets/images/common/building-bg.svg" />
          <div className="text-and-img">
            <div className="text-wrapper">
              <h1 className="title">Coming soon</h1>
              <h2 className="subtitle">New Somnio Web under construction.</h2>
              <p className="text-1">Stay tuned!</p>
              <div className="social-network-group">
                <a target="_blank" href=" https://www.facebook.com/Somnio-Software-101920285002535">
                  <img src="/assets/images/common/facebook.svg" alt="" />
                </a>
                <a target="_blank" href="https://www.instagram.com/somnio_software/">
                  <img src="/assets/images/common/instagram.svg" alt="" />
                </a>
                <a target="_blank" href="https://www.linkedin.com/company/somniosoftware">
                  <img src="/assets/images/common/linkedin.svg" alt="" />
                </a>
                <a target="_blank" href="https://twitter.com/somnio_software">
                  <img src="/assets/images/common/twitter.svg" alt="" />
                </a>
                <a target="_blank" href="https://github.com/somnio-software">
                  <img src="/assets/images/common/github.svg" alt="" />
                </a>
              </div>
              <p className="text-2">See us on</p>

              <div className="logos-group">
                <a target="_blank" href="https://clutch.co/profile/somnio-software">
                  <img className="clutch-logo" src="/assets/images/common/clutch.png" alt="" />
                </a>
                <a href="/">
                  <img className="feverr-logo" src="/assets/images/common/feverr_logo.png" alt="" />
                </a>
              </div>
            </div>
            <div className="img-wrapper">
              <img src="/assets/images/common/building-img.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="blur-content">
        <span className="isDesktop">
          <Navbar />
        </span>
        <span className="isMobile">
          <MobileNavbar />
        </span>

        <div className="child">{children}</div>
        <Footer />
      </div>
      <style jsx>{`
        .main-content {
          position: relative;
          width: 100%;
          height: auto;
          overflow: hidden;
        }

        .blur-content {
          position: relative;
          filter: blur(10px);
        }

        .building-message {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          
          .relative-content {
            position: relative;
            width: 100%;
            height: 100%;
            padding: 300px 180px;

            .nav {
              position: absolute;
              z-index: 2;
              top: 0;
              left: 0;
              width: 100%;
              height: auto;
              padding: 90px 180px;

              .logo {
                width: 217px;
                height: auto;
              }
            }

            .bg {
              position: absolute;
              top: -768px;
              left: -660px;
            }

            .text-and-img {
              position: relative;
              display: flex;
              width: 100%;
              justify-content: space-between;

              .text-wrapper {
                color: #fff;

                .title {
                  font-size: 80px;
                  font-weight: bold;
                  margin-bottom: 40px;
                }

                .subtitle {
                  font-size: 28px;
                  font-weight: bold;
                  color: #3bcee7;
                }

                .social-network-group {
                  margin-bottom: 106px;

                  img {
                    margin-right: 40px;
                    height: 38px;
                    width: auto;
                  }
                }

                .logos-group {
                  .clutch-logo {
                    height: 54px;
                    width: auto;
                    margin-right: 90px;
                  }
                  .feverr-logo {
                    height: 36px;
                    width: auto;
                  }
                }

                .text-1 {
                  font-size: 28px;
                  margin-bottom: 50px;
                }

                .text-2 {
                  font-size: 28px;
                  letter-spacing: 1.4px;
                  font-weight: 700;
                  margin-bottom: 40px;
                }
              }
            }
          }
        }

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
    </div>
  );
};
