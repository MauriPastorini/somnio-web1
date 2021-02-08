import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const AboutUsWhyUsSection = ({ t }) => {
  return (
    <div className="AboutUsWhyUsSection">
      <img className="bg" src="./assets/images/about-us/about-us-why-us-bg.svg"/>
      <div className="about-us__content">
        <div className="section-header-light pt-100" data-aos="fade-in">
          <h2>{t("about_us.why_us.title")}</h2>
          <img src={"./assets/images/home-services-line-light.svg"} alt="" />
        </div>
        <p className="about-us__text custom-container">{t("about_us.why_us.text_1")}</p>
        <p className="about-us__text custom-container">{t("about_us.why_us.text_2")}</p>
        <p className="about-us__text custom-container">{t("about_us.why_us.text_3")}</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <style jsx>{`
        .AboutUsWhyUsSection {
          position: relative;
          width: 100%;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          overflow: hidden;

          .bg{
            width: 100%;
            min-height: auto;
          }

          .about-us__content {
            position: absolute;
            width: 100%;
            z-index:2;
            top:0;

            .about-us__text {
              color: #efefef;
              font-size: 25px;
              text-align: center;
            }
          }

          @media screen and (max-width: 1600px) {
            .bg{
              width: auto;
              min-height: 700px;
            }
          }
        }
      `}</style>
    </div>
  );
};

AboutUsWhyUsSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

AboutUsWhyUsSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(AboutUsWhyUsSection);
