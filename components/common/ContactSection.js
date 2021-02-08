import Link from "next/link";
import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

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

      <div className="content-form container mb-50">
        <form>
          <div className="contact-form-group mb-50">
            <label className="contact-label">What is your name?</label>
            <input className="contact-text-input" type="text" />
          </div>
          <div className="contact-form-group mb-50">
            <label className="contact-label">How is your e-mail?</label>
            <input className="contact-text-input" type="text" />
          </div>
          <div className="contact-form-group mb-50">
            <label className="contact-label">Tell us about your proyect</label>
            <textarea rows="6" className="contact-textarea"></textarea>
          </div>
          <div className="contact-button-wrapper">
            <button className="btn custom-button-1 mb-2">Let's talk</button>
            <Link href="/">
              <a>Or schedule a meeting</a>
            </Link>
          </div>
        </form>
      </div>
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

        .contact-form-group {
          display: flex;
          flex-direction: column;
        }

        .contact-label {
          font-size: 23px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .contact-text-input {
          background: transparent !important;
          border: none;
          border-bottom: 2px solid #fff;
          color: #fff;

          &:focus {
            border-bottom: 4px solid #fff;
          }

          &:invalid {
            border: none;
            border-bottom: 4px solid red;
          }
        }

        .contact-textarea {
          background: transparent;
          border: 2px solid #fff;
          color: #fff;

          &:focus {
            border: 4px solid #fff;
          }

          &:invalid {
            border: none;
            border-bottom: 4px solid red;
          }
        }

        .contact-button-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-end;
          margin-bottom: 24px;
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
