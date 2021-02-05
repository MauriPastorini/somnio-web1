import Link from "next/link";
import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const ContactForm = ({ t }) => (
  <div className="ContactForm content-form container">
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

    <style jsx>{`
      .ContactForm {
        position: relative;
        width: 100%;
        overflow: hidden;
        color: white;
        
        .content-form {
          max-width: 844px;
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
      }
    `}</style>
  </div>
);

ContactForm.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

ContactForm.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ContactForm);
