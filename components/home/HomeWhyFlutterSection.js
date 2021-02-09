import React from "react";
import Link from "next/link";
import { withTranslation } from "../../i18n";
import PropTypes from "prop-types";
import IconChevronRight from "../../components/common/IconChevronRight";

const HomeWhyFlutterSection = ({ t }) => {
  return (
    <div className="HomeWhyFlutterSection">
      <img className="bg" src="./assets/images/home/home-bg-why-flutter.svg" />

      <div className="content">
        <h1 className="whyflutter-title custom-container" data-aos="fade-in">
          {t("home.why_flutter.title")}
        </h1>
        <p className="whyflutter-text" data-aos="fade-in">
          {t("home.why_flutter.text")}
        </p>
        <Link href="/why-flutter" data-aos="fade-in">
          <a className="whyflutter-link">
            {t("common.text_1")}

            <IconChevronRight />
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .HomeWhyFlutterSection {
            min-height: 646px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            position: relative;
            overflow: hidden;
          }

          .bg {
            width: 100%;
            min-height: 646px;
          }

          .content {
            position: absolute;
            width: 100%;
            top: 0;
            z-index: 1;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .whyflutter-title {
            font-size: 54px;
            font-weight: 700;
            color: #ffffff;
            text-align: center;
            margin-bottom: 70px;
            letter-spacing: 0px;
          }

          .whyflutter-text {
            font-size: 25px;
            color: #EFEFEF;
            text-align: center;
            max-width: 1024px;
            margin-bottom: 70px;
            letter-spacing: 0px;
          }

          .whyflutter-link {
            font-size: 27px;
            font-weight: 700;
            color: #ffffff;
            text-align: center;
            text-decoration: none;
          }
        `}
      </style>
    </div>
  );
};

HomeWhyFlutterSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

HomeWhyFlutterSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(HomeWhyFlutterSection);
