import Link from "next/link";
import PropTypes from "prop-types";
import { withTranslation } from "../../../i18n";

const Footer = ({ t }) => {
  const handleToUp = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="Footer">
      <div onClick={handleToUp} className="to-up">
        <img src="/assets/images/common/arrow3.svg" alt="" />
      </div>

      <div className="footer-content custom-container" data-aos="fade-in">
        <div className="row-footer">
          <div className="row-footer-header">
            <h4 className="row-footer-title">{t("common.footer.about")}</h4>
            <div className="under-line"></div>
          </div>
          <div className="row-footer-links">
            <Link href="/about-us#our-values">
              <a className="row-footer-link">
                <span>{t("common.footer.our_values")}</span>
              </a>
            </Link>
            <Link href="/about-us#how-we-work">
              <a className="row-footer-link">
                <span>{t("common.footer.how_we_work")}</span>
              </a>
            </Link>
            <Link href="/about-us#team">
              <a className="row-footer-link">
                <span>{t("common.footer.team")}</span>
              </a>
            </Link>
            <Link href="/faq">
              <a className="row-footer-link">
                <span>FAQ</span>
              </a>
            </Link>
          </div>
        </div>

        <div className="row-footer">
          <div className="row-footer-header">
            <h4 className="row-footer-title">{t("common.footer.work")}</h4>
            <div className="under-line"></div>
          </div>
          <div className="row-footer-links">
            <Link href="/services/working-modalities">
              <a className="row-footer-link">
                <span>{t("common.footer.working_modalities")}</span>
              </a>
            </Link>

            <Link href="/services/mobile-app-development">
              <a className="row-footer-link">
                <span>{t("common.navbar.services_mobile")}</span>
              </a>
            </Link>
            <Link href="/services/web-development">
              <a className="row-footer-link">
                <span>{t("common.navbar.services_web")}</span>
              </a>
            </Link>
            <Link href="/services/ux-ui">
              <a className="row-footer-link">
                <span>UX/UI</span>
              </a>
            </Link>
            <Link href="/our-work">
              <a className="row-footer-link">
                <span>{t("common.navbar.our_work")}</span>
              </a>
            </Link>
          </div>
        </div>

        <div className="row-footer">
          <div className="row-footer-header">
            <h4 className="row-footer-title">{t("common.footer.community")}</h4>
            <div className="under-line"></div>
          </div>

          <div className="row-footer-links">
            <Link href="/blog">
              <a className="row-footer-link">
                <span>Blog</span>
              </a>
            </Link>
            <Link href="/get-in-touch">
              <a className="row-footer-link">
                <span>{t("common.footer.meetup")}</span>
              </a>
            </Link>
          </div>
        </div>

        <div className="row-footer">
          <div className="row-footer-header">
            <h4 className="row-footer-title">{t("common.footer.office")}</h4>
            <div className="under-line"></div>
          </div>

          <p className="row-footer-description">Montevideo</p>
          <p className="row-footer-description">Av. Italia 6201 LATU</p>
          <p className="row-footer-description">Edificio Los Naranjos</p>
          <p className="row-footer-description">Montevideo, Uruguay</p>
        </div>

        <div className="row-footer">
          <div className="row-footer-header">
            <h4 className="row-footer-title">{t("common.footer.contact")}</h4>
            <div className="under-line"></div>
          </div>

          <p className="row-footer-description">info@somniosoftware.com</p>
          <p className="row-footer-description">(+598) 98 168 142</p>
        </div>
      </div>

      <div className="footer-content-network custom-container" data-aos="fade-up">
        {/* <a target="_blank" href="https://clutch.co/profile/somnio-software">
          <img className="clutch-logo" src="/assets/images/common/clutch.png" alt="" />
        </a> */}

        <div
          style={{ width: "192px" }}
          className="clutch-widget"
          data-url="https://widget.clutch.co"
          data-widget-type="2"
          data-height="50"
          data-clutchcompany-id="1252668"
        ></div>

        <Link href="/">
          <a>
            <img className="somnio-logo" src="/assets/images/common/logo.png" alt="" />
          </a>
        </Link>

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
      </div>

      <div className="custom-container footer-certificatons-logos" data-aos="fade-up">
        <a href="https://www.itfirms.co/top-mobile-app-development-companies/" target="_blank">
          <img
            src="/assets/images/common/app-developer-itfirms-2021.png"
            alt="app developers uruguay"
            title="App Developers Uruguay"
          />
        </a>
        <a href="https://www.itfirms.co/top-web-development-companies/" target="_blank">
          <img
            src="/assets/images/common/web-developer-itfirms-2021.png"
            alt="web developers uruguay"
            title="Web Developers Uruguay"
          />
        </a>
        <a href="https://topappdevelopmentcompanies.com/uy/directory/app-developers/uruguay" target="_blank">
          <img src="/assets/images/common/top-app-development-companies.png" alt="" />
        </a>
        <a href="https://clutch.co/press-releases/awards-best-b2b-companies-latin-america-2020" target="_blank">
          <img src="/assets/images/common/B2B_Companies_Uruguay_2020.png" alt="" title="" />
        </a>
        <a href="https://themanifest.com/app-development/companies/latin-america#somniosoftware" target="_blank">
          <img src="/assets/images/common/App-Developers_Latin-America_2021.png" alt="" title="" />
        </a>
      </div>
      <div className="custom-container footer-certificatons-logos-mobile" data-aos="fade-up">
        <span className="first-group">
          <a href="https://www.itfirms.co/top-mobile-app-development-companies/" target="_blank">
            <img
              src="/assets/images/common/app-developer-itfirms-2021.png"
              alt="app developers uruguay"
              title="App Developers Uruguay"
            />
          </a>
          <a href="https://www.itfirms.co/top-web-development-companies/" target="_blank">
            <img
              src="/assets/images/common/web-developer-itfirms-2021.png"
              alt="web developers uruguay"
              title="Web Developers Uruguay"
            />
          </a>
          <a href="https://topappdevelopmentcompanies.com/uy/directory/app-developers/uruguay" target="_blank">
            <img src="/assets/images/common/top-app-development-companies.png" alt="" />
          </a>
        </span>

        <span className="second-group">
          <a href="https://clutch.co/press-releases/awards-best-b2b-companies-latin-america-2020" target="_blank">
            <img src="/assets/images/common/B2B_Companies_Uruguay_2020.png" alt="" title="" />
          </a>
          <a href="https://themanifest.com/app-development/companies/latin-america#somniosoftware" target="_blank">
            <img src="/assets/images/common/App-Developers_Latin-America_2021.png" alt="" title="" />
          </a>
        </span>
      </div>

      <style jsx>{`
        .Footer {
          background: #001739;
          padding-top: 100px;
          padding-bottom: 79px;
          max-height: 900px;
          position: relative;

          .to-up {
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            position: absolute !important;
            width: 84px !important;
            height: 84px !important;
            background: transparent linear-gradient(135deg, #48c7e2 0%, #3bcee7 100%) 0% 0% no-repeat padding-box !important;
            border: 4px solid #001739 !important;
            top: -42px !important;
            left: calc(50% - 42px) !important;
            border-radius: 50% !important;

            svg {
              width: 30px;
              height: 30px;
              color: #fff;
            }

            &:hover {
              cursor: pointer;
            }
          }

          .footer-content {
            display: flex;
            justify-content: space-between;
            margin-bottom: 100px;

            .row-footer-header {
              display: flex;
              flex-direction: column;
              margin-bottom: 30px;

              .under-line {
                width: 50px;
                height: 1px;
                background-color: #fff;
              }
            }

            .row-footer {
              .row-footer-title {
                color: #fff;
                font-weight: 700;
                font-size: 20px;
              }
              .row-footer-description {
                color: #fff;
                white-space: wrap;
                margin-bottom: 0;
                font-size: 20px;
              }

              .row-footer-links {
                display: flex;
                flex-direction: column;

                .row-footer-link {
                  text-decoration: none;
                  color: #fff;
                  margin-bottom: 7px;
                  font-size: 20px;

                  span:hover {
                    border-bottom: 1px solid #fff;
                  }
                }
              }
            }
          }

          .footer-content-network {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .clutch-logo {
              width: 107px;
              height: 54px;
            }
            .somnio-logo {
              width: 187px;
              height: 57px;
            }

            .social-network-group {
              img {
                margin-left: 20px;
              }
            }
          }

          .footer-certificatons-logos-mobile {
            display: none;
          }

          .footer-certificatons-logos {
            margin-top: 130px;
            display: flex;
            justify-content: space-evenly;
            max-width: 1040px !important;

            a img {
              width: 150px;
              height: 150px;
            }
          }
        }

        @media screen and (max-width: 1280px) {
          .Footer {
            max-height: unset;

            .footer-content {
              flex-direction: column;
              align-items: center;
              margin-bottom: 0;

              .row-footer-header {
                align-items: center;
              }

              .row-footer {
                margin-bottom: 50px;

                .row-footer-title {
                  font-size: 18px;
                }

                .row-footer-description {
                  text-align: center;
                  font-size: 18px;
                }

                .row-footer-links {
                  display: flex;
                  flex-direction: column;
                  align-items: center;

                  .row-footer-link {
                    font-size: 18px;
                  }
                }
              }
            }

            .footer-content-network {
              display: flex;
              justify-content: space-between;
              align-items: center;
              flex-direction: column;

              .clutch-logo {
                width: 70px;
                height: auto;
                margin-bottom: 114px;
              }

              .somnio-logo {
                width: 131px;
                height: auto;
                margin-top: 67px;
                margin-bottom: 67px;
              }

              .social-network-group {
                img {
                  margin-left: 16px;
                  margin-right: 16px;
                }
              }
            }

            .footer-certificatons-logos-mobile {
              display: flex;
              flex-direction: column;
              align-items: center;
              max-width: 700px !important;

              .first-group {
                display: flex;
                justify-content: space-between;
                width: 100%;
                margin-top: 119px;
                margin-bottom: 50px;
              }

              .second-group {
                display: flex;
                justify-content: space-between;
                max-width: 60%;
                width: 100%;
                margin-bottom: 50px;
              }

              a img {
                width: 90px;
                height: 90px;
              }
            }

            .footer-certificatons-logos {
              display: none;
            }
          }
        }
      `}</style>
    </div>
  );
};

Footer.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

Footer.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Footer);
