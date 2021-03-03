import Link from "next/link";
import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";
import ContactForm from "./ContactForm";

const ContactSection = ({ t }) => (
  <div className="ContactSection">
    <div className="line-bottom"></div>
    <img src="/assets/images/common/contact-points-1.svg" className="contact__points-1" alt=""></img>
    <img src="/assets/images/common/contact-points-2.svg" className="contact__points-2" alt=""></img>
    <div className="custom-container">
      <div className="section-header-light header-wrapper" data-aos="fade-in">
        <h2>Let’s create successful apps together!</h2>
        <img src={"/assets/images/home-services-line-light.svg"} alt="" />
      </div>
      <ContactForm />
    </div>
    <style jsx>{`
      .ContactSection {
        position: relative;
        width: 100%;
        overflow: hidden;
        background-image: url(/assets/images/common/contact-bg.svg);
        background-size: 100%;
        background-repeat: no-repeat;
        padding-top: 174px;

        .line-bottom {
          width: 100%;
          height: 1px;
          position: absolute;
          bottom: 0;
          background: #001739;
        }

        .content-form {
          max-width: 844px;
        }

        .contact__points-1 {
          position: absolute;
          top: 100px;
          left: 100px;
          z-index: 2;
        }

        .contact__points-2 {
          bottom: 100px;
          position: absolute;
          right: 100px;
          z-index: 0;
        }
      }

      @media screen and (max-width: 1900px) {
        .ContactSection {
          background-size: auto 120%;
        }
      }

      @media screen and (max-width: 428px) {
        .ContactSection {
          background-image: url(/assets/images/common/mobile/contact-bg.svg);
          background-size: 100%;
          background-repeat: no-repeat;
          padding-top: 85px;

          .header-wrapper {
            margin-bottom: 78px;
          }

          .contact__points-1 {
            display: none;
          }

          .contact__points-2 {
            max-width: 60px;
            height: auto;
            bottom: 20px;
            right: 20px;
          }
        }
      }
    `}</style>
  </div>
);

ContactSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ContactSection);
