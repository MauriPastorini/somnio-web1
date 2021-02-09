import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";
import styles from '../../styles/modules/about-us/AboutUsHeaderSection.module.scss'

const AboutUsHeaderSection = ({ t }) => {
  return (
    <div className="AboutUsHeaderSection">
      <img src={`./assets/images/about-us/about-us-header-bg.svg`} alt="" className="about-us-header__bg" />
      <img src={`./assets/images/about-us/about-us-header-path-1.svg`} alt="" className="about-us-header__path" />

      <div className="wrapper-content">
        <div className="text-and-image custom-container">
          <div className="about-us-header-img__wrapper">
            <img src={`./assets/images/about-us/header-img.svg`} alt="" className="about-us-header-img img-fluid" />
          </div>

          <div className="about-us-header-text__wrapper" data-aos="fade-left">
            <h1 className="about-us-header-text title-1">{t("about_us.header.text_1")}</h1>
            <p className="about-us-header-text paragraph-1">{t("about_us.header.text_2")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

AboutUsHeaderSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

AboutUsHeaderSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(AboutUsHeaderSection);
