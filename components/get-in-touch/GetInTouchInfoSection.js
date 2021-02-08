import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const GetInTouchInfoSection = ({ t }) => {
  return (
    <div className="GetInTouchInfoSection custom-container">
      <h2 className="title-1">If you prefer you can</h2>
      <button className="btn custom-button-1">schedule a meeting</button>
      <h2 className="title-1">or send us an email</h2>
      <p className="email">info@somniosoftware.com</p>
      <p className="phone-title">Phone</p>
      <p className="phone-number">(+598) 98 168 142</p>
      <h2 className="title-2">Ready to get started?</h2>
      <style jsx>{`
        .GetInTouchInfoSection {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 136px;

          .title-1 {
            font-size: 40px;
            font-weight: bold;
            margin-bottom: 67px;
            color: #001331;
            letter-spacing: 4px;
          }

          .custom-button-1{
            margin-bottom: 138px !important;
          }

          .email {
            font-size: 30px;
            margin-bottom: 226px;
          }

          .phone-title {
            font-size: 30px;
            margin-bottom: 40px;
            text-align: start;
            color: #060606;
            width: 402px;
          }
          
          .phone-number {
            font-size: 30px;
            margin-bottom: 520px;
            color: #060606;
            width: 402px;
          }

          .title-2 {
            font-size: 60px;
            font-weight: bold;
            color: #001331;
            margin-bottom:200px
          }
        }
      `}</style>
    </div>
  );
};

GetInTouchInfoSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

GetInTouchInfoSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(GetInTouchInfoSection);
