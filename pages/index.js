import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Somnio Software |​ UX/UI, Mobile & Web Development Company</title>
        <meta
          name="description"
          content="We provide consulting, design, and development services for both Mobile & Web Applications. Flutter is our top technology to build high-quality products in record time."
        />
      </Head>

      <Container />
    </div>
  );
}

export const Container = () => {
  return (
    <div className="main-content">
      <div className="building-message">
        <div className="relative-content">
          <nav className="nav">
            <img className="logo" src="/assets/images/common/logo.png" />
          </nav>

          <img className="bg" src="/assets/images/common/building-bg.svg" />
          <img className="bg--mobile" src="/assets/images/common/mobile/building-bg.svg" />

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
              <img className="img-fluid" src="/assets/images/common/building-img.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="blur-content">
        <img className="building-blurry-bg" src="/assets/images/common/building-blurry-bg.png" alt="" />
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
          height: 100vh;
          overflow: hidden;
          img {
            height: 100vh;
          }
        }

        .building-message {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          width: 100%;
          height: 100vh;

          .relative-content {
            position: relative;
            width: 100%;
            height: 100%;
            padding: 258px 100px 258px 207px;

            .nav {
              position: absolute;
              z-index: 2;
              top: 0;
              left: 0;
              width: 100%;
              height: auto;
              padding: 94px 207px;

              .logo {
                width: 217px;
                height: auto;
              }
            }

            .bg {
              position: absolute;
              top: -768px;
              left: -647px;
            }

            .bg--mobile {
              display: none;
            }

            .text-and-img {
              position: relative;
              display: flex;
              width: 100%;
              justify-content: space-between;
              max-width: 1535px;

              .text-wrapper {
                color: #fff;

                .title {
                  font-size: 80px;
                  font-weight: bold;
                  margin-bottom: 38px;
                  margin-top: 96px;
                }

                .subtitle {
                  font-size: 28px;
                  font-weight: bold;
                  color: #3bcee7;
                  margin-bottom: 6px;
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
                  display: flex;
                  align-items: center;

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
                  margin-bottom: 54px;
                  margin-top: 0px;
                }

                .text-2 {
                  font-size: 28px;
                  letter-spacing: 1.4px;
                  font-weight: 700;
                  margin-bottom: 40px;
                }
              }

              .img-wrapper{
   
              }
            }
          }
        }

        @media screen and (max-width: 1750px) {
          .building-message {
            .relative-content {
              padding: 200px 80px;
              .nav {
                position: absolute;
                padding: 90px 80px;
              }

              .text-and-img {
                max-width: 1400px;

                .text-wrapper {
                  .title {
                    font-size: 70px;
                    margin-top: 60px;
                  }

                  .subtitle {
                    font-size: 25px;
                  }

                  .social-network-group {
                    margin-bottom: 80px;
                  }
                }

                .img-wrapper {
                  img {
                    width: 100%;
                  }
                }
              }
            }
          }
        }

        @media screen and (max-width: 1280px) {
          .main-content {
            overflow: auto;
            overflow-x: hidden;
          }

          .building-message {
            .relative-content {
              padding: 150px 50px;
              .nav {
                padding: 50px;

                .logo {
                  width: 180px;
                }
              }

              .bg {
                display: none;
              }

              .bg--mobile {
                position: absolute;
                top: -793px;
                left: -443px;
                display: block;
              }

              .text-and-img {
                .text-wrapper {
                  .title {
                    font-size: 50px;
                    margin-top: 0px;
                  }

                  .subtitle {
                    font-size: 21px;
                  }

                  .social-network-group {
                    margin-bottom: 50px;

                    img {
                      margin-right: 20px;
                    }
                  }

                  .logos-group {
                    .clutch-logo {
                      height: 54px;
                      width: auto;
                      margin-right: 50px;
                    }
                    .feverr-logo {
                      height: 36px;
                      width: auto;
                    }
                  }

                  .text-1 {
                    font-size: 20px;
                    margin-bottom: 50px;
                  }

                  .text-2 {
                    font-size: 20px;
                    margin-bottom: 40px;
                  }
                }

                .img-wrapper {
                  max-width: 600px;

                  img {
                    width: 100%;
                  }
                }
              }
            }
          }
        }

        @media screen and (max-width: 1024px) {
          .building-message {
            .relative-content {
              padding: 75px 25px;
              .nav {
                padding: 35px;
                display: flex;
                flex-direction: column;
                align-items: center;

                .logo {
                  width: 129px;
                }
              }

              .bg {
                display: none;
              }

              .bg--mobile {
                position: absolute;
                top: -793px;
                left: -443px;
                display: block;
              }

              .text-and-img {
                flex-direction: column;
                align-items: center;

                .text-wrapper {
                  max-width: 230px;

                  .title {
                    font-size: 50px;
                    text-align: center;
                    margin-bottom: 27px;
                    margin-top: 23px;
                  }

                  .subtitle {
                    font-size: 21px;
                    text-align: center;
                  }

                  .social-network-group {
                    margin-bottom: 45px;
                    display: flex;
                    justify-content: center;

                    img {
                      margin-right: 30px;
                      height: 31px;
                    }
                    
                    a:last-of-type img{
                      margin-right: 0px;
                    }
                  }

                  .logos-group {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 35px;

                    .clutch-logo {
                      height: 37px;
                    }

                    .feverr-logo {
                      height: 25px;
                    }
                  }

                  .text-1 {
                    font-size: 20px;
                    margin-bottom: 35px;
                    text-align: center;
                  }

                  .text-2 {
                    font-size: 20px;
                    margin-bottom: 25px;
                    text-align: center;
                  }
                }

                .img-wrapper {
                  max-width: 600px;

                  img {
                    width: 100%;
                  }
                }
              }
            }
          }
        }
      `}</style>
    </div>
  );
};
