import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const WhyFlutterBrandsTrutsFlutterSection = ({ t }) => {
  return (
    <div className="WhyFlutterBrandsTrutsFlutterSection">
      <div className="section-header-dark mt-100" data-aos="fade-in">
        <h2>{t("why_flutter.trust_flutter.title")}</h2>
        <img src={"./assets/images/home-services-line.svg"} alt="" />
      </div>

      <div className="brand-list custom-container">
        <img src="./assets/images/why-flutter/google.png" alt="" />
        <img src="./assets/images/why-flutter/ebay.png" alt="" />
        <img src="./assets/images/why-flutter/bmw.png" alt="" />
        <img src="./assets/images/why-flutter/square.png" alt="" />
        <img src="./assets/images/why-flutter/alibaba.png" alt="" />
      </div>
      <style jsx>{`
        .WhyFlutterBrandsTrutsFlutterSection {
          .brand-list {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            margin-bottom: 180px;
          }
        }
      `}</style>
    </div>
  );
};

WhyFlutterBrandsTrutsFlutterSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

WhyFlutterBrandsTrutsFlutterSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(WhyFlutterBrandsTrutsFlutterSection);
