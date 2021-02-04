import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const ServicesUxUiHeaderSection = ({t}) => {

  return (
    <div className="ServicesUxUiHeaderSection">
      <img src="./assets/images/services-uxui/header-bg.svg" alt="" className="header__bg" />
      <img src="./assets/images/services-uxui/header-path.svg" alt="" className="header__path" />
      <img src="./assets/images/services-uxui/header-path2.svg" alt="" className="header__path2" />
      <div className="wrapper-content">
        <div className="text-and-image custom-container">
          <div className="header-text-wrapper" data-aos="fade-right">
            <h1 className="header-title">UI/UX</h1>
            <p className="header-text">{t("services_uxui.header.text_1")}</p>
          </div>
          <div className="header-img-wrapper">
            <img src={`./assets/images/services-uxui/header-img.svg`} alt="" className="header-img img-fluid" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .ServicesUxUiHeaderSection {
          position: relative;
          overflow: hidden;

          .header__bg {
            width: 100%;
            top: 0;
            z-index: -2;
          }

          .header__path {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;
            max-width: 90%;
            height: auto;
          }
          .header__path2 {
            position: absolute;
            top: -200px;
            right: -700px;
            z-index: 0;
            height: auto;
          }

          .text-and-image {
            display: flex;
            align-items: center;
            margin-top: 70px;

            .header-text-wrapper {
              width: 45%;

              .header-title {
                width: 580px;
                font-weight: bold;
                font-size: 80px;
                color: #ffffff;
                margin-bottom: 50px;
              }
              .header-text {
                width: 550px;
                font-size: 30px;
                color: #ffffff;
              }
            }

            .header-img-wrapper {
              width: 55%;

              .header-img {
                width: 95%;
                margin-left: 5%;
              }
            }
          }

          @media screen and (max-width: 1700px) {
            .header__bg {
              width: auto;
              min-height: 600px;
            }
          }
        }
      `}</style>
    </div>
  );
};


ServicesUxUiHeaderSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

ServicesUxUiHeaderSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ServicesUxUiHeaderSection);
