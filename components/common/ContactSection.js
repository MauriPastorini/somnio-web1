import Link from "next/link";
import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";
import ContactForm from "./ContactForm";

const ContactSection = ({ t }) => (
  <div className="ContactSection">
    <img src="./assets/images/common/contact-bg.svg" className="contact__bg" alt=""></img>
    <img src="./assets/images/common/contact-points-1.svg" className="contact__points-1" alt=""></img>
    <img src="./assets/images/common/contact-points-2.svg" className="contact__points-2" alt=""></img>
    <div className="contact__content">
      <div className="section-header-light mt-100 pt-100" data-aos="fade-in">
        <h2>Let’s create successful apps together!</h2>
        <img src={"./assets/images/home-services-line-light.svg"} alt="" />
      </div>

      <ContactForm />
    </div>
    <style jsx>{`
      .ContactSection {
        position: relative;
        width: 100%;
        overflow: hidden;

        .content-form {
          max-width: 844px;
        }

        .contact__bg {
          width: 100%;
        }

        .contact__points-1 {
          position: absolute;
          top: 100px;
          left: 100px;
          z-index: 2;
        }

        .contact__points-2 {
          z-index: 2;
          bottom: 100px;
          right: 100px;
          z-index: 2;
          position: absolute;
        }

        .contact__content {
          position: absolute;
          z-index: 2;
          top: 0;
          font-size: 25px;
          width: 100%;
          color: white;
        }

        @media screen and (max-width: 1800px) {
          .contact__bg {
            width: auto;
            min-height: 800px;
          }
        }
      }
    `}</style>
  </div>
);

ContactSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

ContactSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ContactSection);
