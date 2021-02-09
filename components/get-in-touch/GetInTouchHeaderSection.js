import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";
import ContactForm from "../common/ContactForm";

const GetInTouchHeaderSection = ({ t }) => {
  return (
    <div className="GetInTouchHeaderSection">
      <img src="./assets/images/get-in-touch/header-bg.svg" alt="" className="header__bg" />
      <img src="./assets/images/common/contact-points-1.svg" alt="" className="dots1" />
      <img src="./assets/images/common/contact-points-2.svg" alt="" className="dots2" />
      <div className="wrapper-content">
        <div className="text-and-image custom-container">
          <div className="header-text-wrapper" data-aos="fade-right">
            <h1 className="header-title">{t("get_in_touch.header.text_1")}</h1>
            <p className="header-text">{t("get_in_touch.header.text_2")}</p>
          </div>
          <div className="header-img-wrapper">
            <img src={`./assets/images/get-in-touch/header-img.svg`} alt="" className="header-img" />
          </div>
        </div>

        <span className="form-wrapper">
          <ContactForm />
        </span>
      </div>

      <style jsx>{`
        .GetInTouchHeaderSection {
          position: relative;
          overflow: hidden;

          .header__bg {
            width: 100%;
            top: 0;
            z-index: -2;
          }

          .dots1 {
            position: absolute;
            top: 874px;
            left: 176px;
          }

          .dots2 {
            position: absolute;
            bottom: 179px;
            right: 59px;
          }

          .text-and-image {
            display: flex;
            align-items: center;
            margin-top: 77px;

            .header-text-wrapper {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              width: 67%;
              margin-right: 2%;
              margin-top: 92px;

              .header-title {
                max-width: 858px;
                font-size: 80px;
                font-weight: bold;
                color: #ffffff;
              }
              .header-text {
                font-size: 40px;
                font-weight: bold;
                color: #ffffff;
              }
            }

            .header-img-wrapper {
              margin-top: 80px;
              width: 31%;

              .header-img {
                width: 95%;
                margin-right: 5%;
              }
            }
          }

          .form-wrapper {
            margin-top: 395px;
            max-width: 900px;
            width: 100%;
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

GetInTouchHeaderSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

GetInTouchHeaderSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(GetInTouchHeaderSection);
