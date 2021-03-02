import Link from "next/link";
import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const GetInTouchContactForm = ({ t }) => (
  <form className="GetInTouchContactForm">
    <div className="contact-form-group mb-50">
      <label className="contact-label">What is your name?</label>
      <input className="contact-text-input" type="text" />
    </div>
    <div className="contact-form-group mb-50">
      <label className="contact-label">How is your e-mail?</label>
      <input className="contact-text-input" type="text" />
    </div>
    <div className="contact-form-group mb-30">
      <label className="contact-label">Tell us about your proyect</label>
      <textarea rows="8" className="contact-textarea"></textarea>
    </div>
    <div className="contact-button-wrapper">
      <button className="btn btn-custom-1">Let's talk</button>
    </div>

    <style jsx>{`
      .GetInTouchContactForm {
        position: relative;
        width: 100%;
        overflow: hidden;
        color: white;
        margin: 0 auto;

        .contact-form-group {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .contact-label {
          font-size: 22px;
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
          margin-bottom: 24px;

          button {
            margin-bottom: 23px;
          }

          .link-meeting {
            color: #3bcee7;
            font-size: 20px;
          }
        }
      }

      @media screen and (max-width: 1280px) {
        .GetInTouchContactForm {
          display: flex;
          flex-direction: column;
          align-items: center;

          .contact-form-group {
          }

          .contact-label {
            font-size: 18px;
          }

          .contact-text-input {
            font-size: 18px;
          }

          .contact-textarea {
            font-size: 18px;
          }

          .contact-button-wrapper {
            button {
              margin-bottom: 23px;
              width: 241px;
              height: 49px;
              font-size: 20px !important;
            }

            .link-meeting {
              font-size: 20px;
              margin-bottom: 50px;
            }
          }
        }
      }
    `}</style>
  </form>
);

GetInTouchContactForm.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

GetInTouchContactForm.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(GetInTouchContactForm);
