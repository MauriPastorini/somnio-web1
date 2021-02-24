import Link from "next/link";
import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";
import GetInTouchContactForm from "../common/GetInTouchContactForm";

const GetInTouchHeaderSection = ({ t }) => {
  return (
    <div className="GetInTouchHeaderSection">
      <img src="/assets/images/get-in-touch/header-path.svg" alt="" className="header__path" />
      <div className="text-and-image custom-container">
        <div className="header-text-wrapper" data-aos="fade-right">
          <h1 className="header-title">{t("get_in_touch.header.text_1")}</h1>
          <p className="header-text">{t("get_in_touch.header.text_2")}</p>
          <GetInTouchContactForm />
        </div>
        <div className="header-img-wrapper">
          <img src={`/assets/images/get-in-touch/header-img.svg`} alt="" className="header-img" />

          <div className="contact-info">
            <h2>Contact us</h2>
            <p>
              <img src="/assets/images/get-in-touch/call.svg" />
              Call directly at: (+598) 98 168 142
            </p>
            <p>
              <img src="/assets/images/get-in-touch/mail.svg" />
              Email: info@somniosoftware.com
            </p>
            <p>
              <img src="/assets/images/get-in-touch/calendar.svg" />
              Shedule a meeting{" "}
              <Link href="#">
                <a className="link">here</a>
              </Link>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .GetInTouchHeaderSection {
          position: relative;
          overflow: hidden;
          background-image: url(/assets/images/get-in-touch/header-bg.svg);
          background-repeat: no-repeat;
          background-position: center;
          background-size: 200%;
          padding: 215px 0 350px 0;

          .header__path {
            position: absolute;
            top: -537px;
            left: -660px;
            z-index: 0;
            height: auto;
          }

          .custom-container {
            max-width: 1350px !important;
          }

          .text-and-image {
            position: relative;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;

            .header-text-wrapper {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              width: 100%;
              max-width: 633px;
              margin-top: 22px;

              .header-title {
                max-width: 858px;
                font-size: 60px;
                font-weight: bold;
                color: #ffffff;
                margin-bottom: 15px;
              }

              .header-text {
                font-size: 25px;
                font-weight: bold;
                color: #ffffff;
                margin-bottom: 75px;
              }
            }

            .header-img-wrapper {
              .header-img {
                max-width: 365px;
                margin-bottom: 70px;
              }
              .contact-info {
                color: #fff;

                h2 {
                  font-size: 25px;
                  font-weight: bold;
                  margin-bottom: 32px;
                }

                p {
                  font-size: 23px;
                  margin-bottom: 1.1rem;

                  img {
                    margin-right: 25px;
                  }

                  .link {
                    color: #00e6ca;
                    font-weight: bold;
                    text-decoration: none;
                  }
                }
              }
            }
          }
        }

        @media screen and (max-width: 1920px) {
          .GetInTouchHeaderSection {
            padding: 215px 0 120px 0;
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
