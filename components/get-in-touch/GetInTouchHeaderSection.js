import Link from "next/link";
import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";
import GetInTouchContactForm from "../common/GetInTouchContactForm";

const ContactInfo = () => {
  return (
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

      <style jsx>{`
        .contact-info {
          color: #fff;

          h2 {
            font-size: 25px;
            font-weight: bold;
            margin-bottom: 32px;
          }
          p{
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

        @media screen and (max-width: 1280px) {
          .contact-info {
            h2 {
              text-align: center;
            }

            p {
              text-align: center;
            }
          }
        }
      `}</style>
    </div>
  );
};

const HeaderTitle = ({ t }) => (
  <>
    <h1 className="header-title">{t("get_in_touch.header.text_1")}</h1>
    <p className="header-text">{t("get_in_touch.header.text_2")}</p>
    <style jsx>{`
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

      @media screen and (max-width: 1280px) {
        .header-title {
          font-size: 36px;
          margin-bottom: 20px;
          text-align: center;
          max-width: 300px;
        }

        .header-text {
          font-size: 18px;
          text-align: center;
          margin: 0 auto;
          max-width: 200px;
          margin-bottom: 100px;
        }
      }
    `}</style>
  </>
);

const GetInTouchHeaderSection = ({ t }) => {
  return (
    <section className="GetInTouchHeaderSection">
      <img src="/assets/images/get-in-touch/header-path.svg" alt="" className="header__path" />
      <div className="text-and-image custom-container">
        <div className="form--mobile">
          <HeaderTitle t={t} />
        </div>

        <div className="header__text-wrapper" data-aos="fade-right">
          <div className="form--desktop">
            <HeaderTitle t={t} />
          </div>

          <GetInTouchContactForm />

          <div className="form--mobile">
            <ContactInfo />
          </div>
        </div>
        <div className="header__img-wrapper">
          <img src={`/assets/images/get-in-touch/header-img.svg`} alt="" className="header__img" />

          <div className="form--desktop">
            <ContactInfo />
          </div>
        </div>
      </div>

      <style jsx>{`
        .form--mobile {
          display: none;
        }

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

            .header__text-wrapper {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              width: 100%;
              max-width: 633px;
              margin-top: 22px;
            }

            .header__img-wrapper {
              .header__img {
                max-width: 365px;
                margin-bottom: 70px;
              }
            }
          }
        }

        @media screen and (max-width: 1920px) {
          .GetInTouchHeaderSection {
            padding: 215px 0 120px 0;
          }
        }

        @media screen and (max-width: 1280px) {
          .form--mobile {
            display: block;
            margin: 0 auto;
          }
          .form--desktop {
            display: none;
          }

          .GetInTouchHeaderSection {
            background-image: url(/assets/images/get-in-touch/mobile/header-bg.svg);
            background-position: top;
            background-size: 100%;
            padding: 202px 0 125px 0;

            .header__path {
              display: none;
            }

            .custom-container {
              max-width: 1350px !important;
            }

            .text-and-image {
              flex-direction: column;
              align-items: center;

              .header__text-wrapper {
                order: 1;
              }

              .header__img-wrapper {
                .header__img {
                  max-width: 245px;
                  margin-bottom: 204px;
                }
              }
            }
          }
        }
      `}</style>
    </section>
  );
};

GetInTouchHeaderSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(GetInTouchHeaderSection);
