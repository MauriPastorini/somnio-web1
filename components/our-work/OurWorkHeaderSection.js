import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const OurWorkHeaderSection = ({ t }) => {
  return (
    <div className="OurWorkHeaderSection">
      <img src="/assets/images/our-work/header-path.svg" alt="" className="header__path" />
      <div className="content-wrapper">
        <div className="text-and-image custom-container">
          <div className="header-text-wrapper" data-aos="fade-right">
            <h1 className="header-title">{t("our_work.header.text_1")}</h1>
            <p className="header-text">{t("our_work.header.text_2")}</p>
          </div>
          <div className="header-img-wrapper">
            <img src={`/assets/images/our-work/header-img.svg`} alt="" className="header-img img-fluid" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .OurWorkHeaderSection {
          position: relative;
          overflow: hidden;
          background-image: url(/assets/images/our-work/header-bg.svg);
          background-repeat: no-repeat;
          background-position: center;
          background-size: 200%;
          height: 1688px;

          .header__path {
            position: absolute;
            top: -435px;
            left: -574px;
            z-index: 0;
            max-width: 90%;
            height: auto;
          }

          .content-wrapper {
            position: absolute;
            margin-top: 222px;
            width: 100%;
            

            .text-and-image {
              align-items: center;
              display: flex;
              justify-content: space-between;
              position: relative;
              margin-bottom: 237px;

              .header-text-wrapper {
                margin-top: 15px;

                .header-title {
                  width: 580px;
                  font-weight: bold;
                  font-size: 80px;
                  color: #ffffff;
                  margin-bottom: 50px;
                  line-height: 90px;
                }

                .header-text {
                  width: 550px;
                  font-size: 30px;
                  color: #ffffff;
                  line-height: 37px;
                }
              }

              .header-img-wrapper {
                .header-img {
                  width: 95%;
                  margin-left: 5%;
                }
              }
            }
          }
        }

        @media screen and (max-width: 1920px) {
          .OurWorkHeaderSection {
            background-repeat: no-repeat;
            background-size: auto 100%;
            background-position: top;
          }
        }

      `}</style>
    </div>
  );
};

OurWorkHeaderSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(OurWorkHeaderSection);
