import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const WhyFlutterWhatIsFlutterSection = ({ t }) => {
  return (
    <div className="WhyFlutterWhatIsFlutterSection mt-200">
      <div className="text-and-images">
        <div className="text-content">
          <h3>{t("why_flutter.what_is_flutter.title")}</h3>
          <p>{t("why_flutter.what_is_flutter.text_1")}</p>
        </div>
        <img src="/assets/images/why-flutter/flutter-logo.svg" alt="" />
      </div>

      <div className="row charasteristic-row">
        <div className="charasteristic-item col-lg-8">
          <img src="/assets/images/why-flutter/check.svg" alt="" />
          <h4>{t("why_flutter.what_is_flutter.characteristics.characteristic_1.title")}</h4>
        </div>
        <div className="charasteristic-item col-lg-4">
          <img src="/assets/images/why-flutter/check.svg" alt="" />
          <h4>{t("why_flutter.what_is_flutter.characteristics.characteristic_4.title")}</h4>
        </div>
      </div>

      <div className="row charasteristic-row">
        <div className="charasteristic-item col-lg-8">
          <img src="/assets/images/why-flutter/check.svg" alt="" />
          <h4>{t("why_flutter.what_is_flutter.characteristics.characteristic_2.title")}</h4>
        </div>
        <div className="charasteristic-item col-lg-4">
          <img src="/assets/images/why-flutter/check.svg" alt="" />
          <h4>{t("why_flutter.what_is_flutter.characteristics.characteristic_5.title")}</h4>
        </div>
      </div>

      <div className="row charasteristic-row">
        <div className="charasteristic-item col-lg-8">
          <img src="/assets/images/why-flutter/check.svg" alt="" />
          <h4>{t("why_flutter.what_is_flutter.characteristics.characteristic_3.title")}</h4>
        </div>
        <div className="charasteristic-item col-lg-4">
          <img src="/assets/images/why-flutter/check.svg" alt="" />
          <h4>{t("why_flutter.what_is_flutter.characteristics.characteristic_6.title")}</h4>
        </div>
      </div>

      <div className="charasteristic-detail-list">
        <div className="charasteristic-detail-item mb-100">
          <div className="img-content">
            <img src="/assets/images/why-flutter/characteristic_1.svg" alt="" />
          </div>
          <div className="text-content">
            <h4>{t("why_flutter.what_is_flutter.characteristics.characteristic_1.title")}</h4>
            <p>{t("why_flutter.what_is_flutter.characteristics.characteristic_1.text")}</p>
          </div>
        </div>

        <div className="charasteristic-detail-item mb-100">
          <div className="text-content">
            <h4>{t("why_flutter.what_is_flutter.characteristics.characteristic_2.title")}</h4>
            <p>{t("why_flutter.what_is_flutter.characteristics.characteristic_2.text")}</p>
          </div>
          <div className="img-content">
            <img src="/assets/images/why-flutter/characteristic_2.svg" alt="" />
          </div>
        </div>

        <div className="charasteristic-detail-item mb-100">
          <div className="img-content">
            <img src="/assets/images/why-flutter/characteristic_3.svg" alt="" />
          </div>
          <div className="text-content">
            <h4>{t("why_flutter.what_is_flutter.characteristics.characteristic_3.title")}</h4>
            <p>{t("why_flutter.what_is_flutter.characteristics.characteristic_3.text")}</p>
          </div>
        </div>

        <div className="charasteristic-detail-item mb-100">
          <div className="text-content">
            <h4>{t("why_flutter.what_is_flutter.characteristics.characteristic_4.title")}</h4>
            <p>{t("why_flutter.what_is_flutter.characteristics.characteristic_4.text")}</p>
          </div>
          <div className="img-content">
            <img src="/assets/images/why-flutter/characteristic_4.svg" alt="" />
          </div>
        </div>

        <div className="charasteristic-detail-item mb-100">
          <div className="img-content">
            <img src="/assets/images/why-flutter/characteristic_5.svg" alt="" />
          </div>
          <div className="text-content">
            <h4>{t("why_flutter.what_is_flutter.characteristics.characteristic_5.title")}</h4>
            <p>{t("why_flutter.what_is_flutter.characteristics.characteristic_5.text")}</p>
          </div>
        </div>

        <div className="charasteristic-detail-item">
          <div className="text-content">
            <h4>{t("why_flutter.what_is_flutter.characteristics.characteristic_6.title")}</h4>
            <p>{t("why_flutter.what_is_flutter.characteristics.characteristic_6.text")}</p>
          </div>
          <div className="img-content">
            <img src="/assets/images/why-flutter/characteristic_6.svg" alt="" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .WhyFlutterWhatIsFlutterSection {
          max-width: 1220px;
          margin: 0 auto;

          .text-and-images {
            display: flex;
            justify-content: space-between;
            margin-bottom: 77px;

            .text-content {
              max-width: 570px;

              h3 {
                color: #001331;
                font-size: 40px;
                font-weight: bold;
              }
              p {
                font-size: 20px;
              }
            }
          }

          .charasteristic-row {
            margin-bottom: 40px;
            .charasteristic-item {
              display: flex;
              justify-content: flex-start;
              align-items: center;

              img {
                margin-right: 42px;
              }

              h4 {
                color: #001331;
                font-size: 24px;
                font-weight: 700;
              }
            }
          }

          .charasteristic-detail-list {

            margin-top: 235px;

            .charasteristic-detail-item {
              display: flex;
              justify-content: space-between;
              align-items: center;
              .text-content {
                width: 50%;
                h4 {
                  color: #001331;
                  font-size: 36px;
                  font-weight: bold;
                  max-width: 422px;
                  margin-bottom: 25px;
                }
                p {
                  color: #707070;
                  font-size: 18px;
                  max-width: 620px;
                }
              }

              .img-content {
                width: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
              }

              &:last-of-type{
                margin-bottom:180px;
              }
            }
          }
        }
      `}</style>
    </div>
  );
};

WhyFlutterWhatIsFlutterSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

WhyFlutterWhatIsFlutterSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(WhyFlutterWhatIsFlutterSection);
