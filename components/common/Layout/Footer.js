import Link from "next/link";
import PropTypes from "prop-types";
import { withTranslation } from "../../../i18n";

const Footer = ({ t }) => {
  return (
    <div className="Footer pt-100">
      <div className="footer-content mb-100 custom-container" data-aos="fade-in">
        <div className="row-footer">
          <div className="row-footer-header">
            <h4 className="row-footer-title">{t("common.footer.about")}</h4>
            <div className="under-line"></div>
          </div>
          <div className="row-footer-links">
            <Link href="/">
              <a className="row-footer-link">
                <span>{t("common.footer.our_values")}</span>
              </a>
            </Link>
            <Link href="/">
              <a className="row-footer-link">
                <span>{t("common.footer.how_we_work")}</span>
              </a>
            </Link>
            <Link href="/">
              <a className="row-footer-link">
                <span>{t("common.footer.team")}</span>
              </a>
            </Link>
            <Link href="/">
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
            <Link href="/">
              <a className="row-footer-link">
                <span>{t("common.footer.working_modalities")}</span>
              </a>
            </Link>

            <Link href="/">
              <a className="row-footer-link">
                <span>{t("common.navbar.services_mobile")}</span>
              </a>
            </Link>
            <Link href="/web-development">
              <a className="row-footer-link">
                <span>{t("common.navbar.services_web")}</span>
              </a>
            </Link>
            <Link href="/">
              <a className="row-footer-link">
                <span>UX/UI</span>
              </a>
            </Link>
            <Link href="/">
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
            <Link href="/">
              <a className="row-footer-link">
                <span>Blog</span>
              </a>
            </Link>
            <Link href="/">
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
        <a target="_blank" href="https://clutch.co/profile/somnio-software">
          <img src="./assets/images/common/clutch.png" alt="" />
        </a>
        <a href="/">
          <img src="./assets/images/common/logo.png" alt="" />
        </a>

        <div className="social-network-group">
          <a target="_blank" href=" https://www.facebook.com/Somnio-Software-101920285002535">
            <img src="./assets/images/common/facebook.svg" alt="" />
          </a>
          <a target="_blank" href="https://www.instagram.com/somnio_software/">
            <img src="./assets/images/common/instagram.svg" alt="" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/company/somniosoftware">
            <img src="./assets/images/common/linkedin.svg" alt="" />
          </a>
          <a target="_blank" href="https://twitter.com/somnio_software">
            <img src="./assets/images/common/twitter.svg" alt="" />
          </a>
          <a target="_blank" href="https://github.com/somnio-software">
            <img src="./assets/images/common/github.svg" alt="" />
          </a>
        </div>
      </div>

      <div className="custom-container footer-certificatons-logos" data-aos="fade-up">
        <img src="./assets/images/common/app-developer-itfirms-2021.png" style={{ height: 150, width: 150 }} />
        <a href=" https://www.itfirms.co/top-web-development-companies/" target="_blank">
          <img
            src="./assets/images/common/web-developer-itfirms-2021.png"
            alt="app developers uruguay"
            title="App Developers Uruguay"
            style={{ height: 150, width: 150 }}
          />
        </a>
        <a href="https://topappdevelopmentcompanies.com/uy/directory/app-developers/uruguay" target="_blank">
          <img
            src="./assets/images/common/top-app-development-companies.png"
            alt="app developers uruguay"
            title="App Developers Uruguay"
            style={{ height: 150, width: 150 }}
          />
        </a>
        <a href="https://www.itfirms.co/top-mobile-app-development-companies/" target="_blank">
          <img
            src="./assets/images/common/B2B_Companies_Uruguay_2020.png"
            alt="app developers uruguay"
            title="App Developers Uruguay"
            style={{ height: 150, width: 150 }}
          />
        </a>
        <a href="https://themanifest.com/app-development/companies/latin-america#somniosoftware" target="_blank">
          <img
            src="./assets/images/common/App-Developers_Latin-America_2021.jpg"
            alt="app developers uruguay"
            title="App Developers Uruguay"
            style={{ height: 150, width: 150 }}
          />
        </a>
      </div>
      
      {/* <div className="mt-100">
      <button className="btn" onClick={() => i18n.changeLanguage("es")}>Español</button>
      <button className="btn" onClick={() => i18n.changeLanguage("en")}>Ingles</button>
    </div> */}

      <style jsx>
        {`
          .Footer {
            background: #001739;
            height: 100vh;
            max-height: 900px;
          }

          .footer-content {
            display: flex;
            justify-content: space-between;

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
              }
              .row-footer-description {
                color: #fff;
                white-space: wrap;
                margin-bottom: 0;
              }

              .row-footer-links {
                display: flex;
                flex-direction: column;

                .row-footer-link {
                  text-decoration: none;
                  color: #fff;
                  margin-bottom: 7px;

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

            .social-network-group {
              img {
                margin-left: 20px;
              }
            }
          }

          .footer-certificatons-logos {
            margin-top: 130px;
            display: flex;
            justify-content: space-evenly;
          }
        `}
      </style>
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
