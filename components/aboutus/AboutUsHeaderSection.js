import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const AboutUsHeaderSection = ({ t }) => {
  return (
    <div className="AboutUsHeaderSection">
      <img src={`./assets/images/about-us/about-us-header-bg.svg`} alt="" className="about-us-header__bg" />
      <img src={`./assets/images/about-us/about-us-header-path-1.svg`} alt="" className="about-us-header__path" />

      <div className="wrapper-content">
        <div className="text-and-image custom-container">
          <div className="about-us-header-img__wrapper">
            <img src={`./assets/images/about-us/header-img.svg`} alt="" className="about-us-header-img img-fluid" />
          </div>

          <div className="about-us-header-text__wrapper" data-aos="fade-left">
            <h1 className="about-us-header-text title-1">{t("about_us.header.text_1")}</h1>
            <p className="about-us-header-text paragraph-1">{t("about_us.header.text_2")}</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .AboutUsHeaderSection {
          overflow: hidden;
          display: flex;
          justify-content: center;

          .about-us-header__bg {
            width: 100%;
            top: 0;
            z-index: -2;
          }

          .about-us-header__path {
            position: absolute;
            top: -420px;
            left: -700px;
            z-index: -1;
            max-width: 80%;
            height: auto;
          }

          .text-and-image {
            align-items: center;
            display: flex;
            margin-top: 100px;

            .about-us-header-text__wrapper {
              width: 45%;
              display: flex;
              flex-direction: column;
              align-items: flex-end;

              .about-us-header-text {
                width: 450px;
              }
            }

            .about-us-header-img__wrapper {
              margin-top: 50px;
              width: 55%;

              .about-us-header-img {
                width: 95%;
                margin-right: 5%;
              }
            }
          }

          @media screen and (max-width: 1700px) {
            .about-us-header__bg {
              width: auto;
              min-height: 600px;
            }
          }

          @media screen and (max-width: 1500px) {
            .text-and-image {
              margin-top: 100px;
              .about-us-header-img__wrapper {
                .about-us-header-img {
                  width: 85%;
                  margin-right: 15%;
                }
              }
            }
          }
        }
      `}</style>
    </div>
  );
};

AboutUsHeaderSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

AboutUsHeaderSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(AboutUsHeaderSection);
